import { test, expect } from '@playwright/test';

test('Article, paragraph and image classes', async ({ page }) => {
    await page.goto(`file://${process.cwd()}/index.html`);

    for( const r of await page.locator('article').all()){
        await expect(r).toHaveClass(/row/);
        await expect(r).toHaveClass(/mt-3/);
    }

    for( const r of await page.locator('p').all()){
        await expect(r).toHaveClass(/col-md-4/);
    }

    for( const r of await page.locator('article img').all()){
        await expect(r).toHaveClass(/col-md-8/);
    }
});
