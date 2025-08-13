import { test, expect } from '@playwright/test';
import exp from 'constants';

test('Footer divs', async ({ page }) => {
    await page.goto(`file://${process.cwd()}/index.html`);

    let divs =  await page.locator('footer div').all()

    for( const r of divs){
        await expect(r).toHaveClass(/col-md-4/);
        await expect(r).toHaveClass(/d-flex/);
        await expect(r).toHaveClass(/justify-content-center/);
    }

    await expect(page.locator('footer div').first()).toHaveClass(/col-6/);
    await expect(page.locator('footer div').nth(1)).toHaveClass(/col-6/);
});
