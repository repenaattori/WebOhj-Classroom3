import { test, expect } from '@playwright/test';

test('Header classes', async ({ page }) => {
    await page.goto(`file://${process.cwd()}/index.html`);

    await expect(page.locator('div').first()).toHaveClass(/m-3/);

    let header = page.locator('header');
    let h1 = page.locator('h1');

    await expect(header).toHaveClass(new RegExp('text-bg-primary|bg-primary'));
    await expect(h1).toHaveClass(/text-center/);

});