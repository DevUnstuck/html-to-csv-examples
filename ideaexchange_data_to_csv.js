/**
 * Convert data on https://ideas.salesforce.com/s/search into csv format.    
 */

// Match the main "row" content containers.
const sfdivs = document.querySelectorAll('[data-cloud-name]');

// Output the CSV header.
console.info('Date,Points,Status,Feature,Title,Category');

// Loop through each row and extract the data points.
for (const sfdiv in sfdivs) {
    const points = sfdivs[sfdiv]?.querySelector('.coveo-idea-points').textContent.replaceAll(',', '');
    const date = sfdivs[sfdiv]?.querySelector('[data-field="@sfcreateddate"] span[title]')?.textContent.replaceAll(',', '');
    const feature = sfdivs[sfdiv]?.querySelector('a.CoveoResultLink').title.replaceAll(',', '');
    const category = sfdivs[sfdiv]?.querySelector('.coveo-cloud-category').textContent.replaceAll(/[^a-zA-Z0-9:]/g,'');
    let status = sfdivs[sfdiv]?.querySelector('.primary-status').textContent.replaceAll(/[^a-zA-Z0-9:]/g,'');
    status = status + ' - ' + sfdivs[sfdiv]?.querySelector('.secondary-status').textContent.replaceAll(/[^a-zA-Z0-9:]/g,'');
    // Output the data in CSV format.
    console.info(`${date},${points},${status},${feature},${category}`);
}