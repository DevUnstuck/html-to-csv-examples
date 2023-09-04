/**
 * Convert data on https://ideas.salesforce.com/s/search into csv format.    
 */

// Match the main "row" content containers.
const sfdivs = document.querySelectorAll('[data-cloud-name]');

// Output the CSV header.
console.info('Date,Points,Status,Feature,Title,Category');

// Loop through each row and extract the data points.
for (const sfdiv in sfdivs) {
    const points = sfdivs[sfdiv]?.querySelector('[data-number]').textContent.replaceAll(',', '');
    const date = sfdivs[sfdiv]?.querySelector('span[title]').textContent.replaceAll(',', '');
    const feature = sfdivs[sfdiv]?.querySelector('a.CoveoResultLink').title.replaceAll(',', '');
    const category = sfdivs[sfdiv]?.querySelectorAll('.coveo-cloud-category')[0].textContent.replaceAll(/[^a-zA-Z0-9:]/g,'');
    const title = sfdivs[sfdiv]?.querySelectorAll('.coveo-cloud-category span[data-field]')[1].textContent.title?.replaceAll(',', '');
    const status = sfdivs[sfdiv]?.querySelector('span[data-field="@sfstatus_secondary__c"]').textContent.replaceAll(',', '');
    // Output the data in CSV format.
    console.info(`${date},${points},${status},${feature},${title},${category}`);
}