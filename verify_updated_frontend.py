import asyncio
import os
from playwright.async_api import async_playwright

async def run():
    async with async_playwright() as p:
        # Launch browser headless
        browser = await p.chromium.launch(headless=True)

        # Test 1: Desktop Viewport
        page = await browser.new_page(viewport={"width": 1280, "height": 800})
        await page.goto("http://localhost:3000")

        # Verify initial lang is RU
        lang = await page.evaluate("document.documentElement.lang")
        print(f"Initial lang: {lang}")

        # Take Desktop initial RU screenshot
        os.makedirs("verification/screenshots", exist_ok=True)
        await page.screenshot(path="verification/screenshots/desktop_ru.png")

        # Trigger language switch to ZH (Chinese)
        await page.evaluate("changeLanguage('zh')")
        lang = await page.evaluate("document.documentElement.lang")
        print(f"Switched lang: {lang}")

        # Click on Policy Modal trigger and take screenshot
        await page.click("#modal-policy-link")
        await page.wait_for_timeout(500)
        await page.screenshot(path="verification/screenshots/policy_modal_zh.png")
        await page.click("#policy-modal-close")

        # Test 2: Mobile Viewport (iPhone 11)
        mobile_page = await browser.new_page(
            viewport={"width": 375, "height": 812},
            user_agent="Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1"
        )
        await mobile_page.goto("http://localhost:3000")

        # Switch to English (EN) on Mobile
        await mobile_page.evaluate("changeLanguage('en')")

        # Toggle Mobile Menu Drawer
        await mobile_page.click("#menu-btn")
        await mobile_page.wait_for_timeout(500)
        await mobile_page.screenshot(path="verification/screenshots/mobile_drawer_en.png")

        # Close Mobile Drawer
        await mobile_page.click("#close-drawer-btn")
        await mobile_page.wait_for_timeout(500)

        # Toggle FAB supported trigger
        await mobile_page.click("#fab-trigger")
        await mobile_page.wait_for_timeout(500)
        await mobile_page.screenshot(path="verification/screenshots/mobile_fab_active.png")

        await browser.close()

if __name__ == "__main__":
    asyncio.run(run())
