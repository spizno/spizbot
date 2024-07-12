// how you like that, huh?

// frog tips shall be used with extreme caustion.

import fetch from 'node-fetch';

const url = "https://frog.tips/api/1/tips/";


async function getFrogTip() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error fetching tip: ${response.statusText}`); // Handle non-200 status codes
    }
    const data = await response.json();
    const randomTipIndex = Math.floor(Math.random() * data.tips.length); // Get random tip index
    const randomTip = data.tips[randomTipIndex]; // Access random tip object
    const frogTipData = `TIP #${randomTip.number}: ${randomTip.tip}`
    return frogTipData; // Return the extracted tip text
  } catch (error) {
    console.error('Error fetching or parsing data:', error);
    return null; // Or provide a different error message
  }
}
getFrogTip()
  .then(frogTipData => {

  if(!frogTipData.ok){
    console.log('frogtips ready');
  } else {
      console.error('Failed to retrieve frog tip.');
    }
  })
  .catch(error => {
    console.error('Unexpected error:', error);
  });
export default getFrogTip;