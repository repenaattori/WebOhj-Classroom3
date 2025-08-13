import { test, expect } from '@playwright/test';
import exp from 'constants';

test('Footer and image classes', async ({ page }) => {
    await page.goto(`file://${process.cwd()}/index.html`);

    let f = page.locator('footer');
    await expect(f).toHaveClass(/row/);
    await expect(f).toHaveClass(/mt-5/);

    for( const r of await page.locator('footer img').all()){
        await expect(r).toHaveClass(/rounded-circle/);
    }
});
