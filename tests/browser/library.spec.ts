import { test, expect } from '@playwright/test';

test('year and subject filters open the original clinical figure, key and locked solution',async({page})=>{
  await page.goto('/');
  await page.getByRole('button',{name:'PYQ library',exact:true}).click();
  await expect(page.getByRole('heading',{name:'Full curriculum',exact:true})).toBeVisible();
  await expect(page.locator('.volume-shelf button')).toHaveCount(8);
  await page.getByRole('button',{name:'Browse 2025 paper'}).click();
  await page.getByLabel('Filter by subject').selectOption('Anatomy');
  await page.getByLabel('Search questions or topics').fill('jugular foramen');
  await page.locator('#entry-pyq-2025-1').click();
  const figure=page.locator('.figure-button img');
  await expect(figure).toBeVisible();
  expect(await figure.evaluate((i:HTMLImageElement)=>i.complete&&i.naturalWidth>100)).toBe(true);
  await page.getByRole('button',{name:'Enlarge figure 1'}).click();
  await page.getByRole('button',{name:'Zoom in'}).click();
  await expect(page.getByRole('dialog')).toContainText('150%');
  await page.keyboard.press('Escape');
  await expect(page.getByRole('button',{name:'Enlarge figure 1'})).toBeFocused();
  await page.locator('.option:has(input[value="D"])').click();
  await page.getByRole('button',{name:'Confirm answer'}).click();
  await page.getByRole('button',{name:'Explanation',exact:true}).click();
  await expect(page.locator('.solution-prose')).toContainText('hypoglossal canal');
  await expect(page.locator('.answer-feedback')).toContainText('Hypoglossal nerve');
  await page.getByRole('button',{name:'Back to papers'}).click();
  await expect(page.getByLabel('Search questions or topics')).toHaveValue('jugular foramen');
  await page.reload();
  await page.getByRole('button',{name:'PYQ library',exact:true}).click();
  await page.locator('#entry-pyq-2025-1').click();
  await expect(page.getByRole('radio',{checked:true})).toBeDisabled();
  await page.getByRole('button',{name:'Daily challenge',exact:true}).click();
  await expect(page.locator('.quiz-count')).toHaveText('0 / 5 confirmed');
});

test('mobile catalogue supports empty filters, pagination, two-image stems and lightbox dismissal',async({page})=>{
  await page.setViewportSize({width:360,height:800});
  await page.goto('/');await page.locator('.library-link').click();
  await page.getByRole('button',{name:'Browse 2023 paper'}).click();
  await page.getByRole('button',{name:'Next page'}).click();
  await expect(page.locator('.pager')).toContainText('Page 2');
  await page.getByLabel('Search questions or topics').fill('zzzznotaword');
  await expect(page.getByText('No questions match these filters.')).toBeVisible();
  await page.getByRole('button',{name:'Clear filters'}).click();
  await page.getByRole('button',{name:'Browse 2023 paper'}).click();
  await page.getByLabel('Filter by subject').selectOption('General Medicine');
  await page.locator('#entry-pyq-2023-101').click();
  await expect(page.locator('.figure-button')).toHaveCount(2);
  await page.getByRole('button',{name:'Enlarge figure 2'}).click();
  await expect(page.getByRole('heading',{name:'Figure 2 of 2'})).toBeVisible();
  expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
  await page.getByRole('button',{name:'Close dialog'}).click();
});

test('curriculum and readers omit rotation, origin and count labels; contradictory keys are read-only',async({page})=>{
  await page.goto('/');await page.locator('.library-link').click();
  const forbidden=/days? before|repeats? after|questions? (?:repeat|per subject)|provenance|original practice|AI-authored|MEDINK|extracted from|\d[\d,]* (?:total |practice )?questions\b/i;
  await expect(page.locator('main')).not.toContainText(forbidden);
  await page.getByRole('button',{name:'Browse 2018 paper'}).click();
  await page.getByLabel('Search questions or topics').fill('Struvite urinary stones');
  await page.locator('#entry-pyq-2018-73').click();
  await expect(page.getByRole('radio').first()).toBeDisabled();
  await page.getByRole('button',{name:'Read solution'}).click();
  await expect(page.locator('.printed-key')).toContainText('(D)');
  await expect(page.locator('.solution-prose')).toContainText('magnesium');
  await expect(page.locator('.quiz-body')).not.toContainText(forbidden);
});
