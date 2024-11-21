export async function fetchImage(seed: string) {
  const url = `https://api.dicebear.com/9.x/pixel-art/svg?seed=${seed}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const svgText = await response.text();
    return svgText;
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
    return null;
  }
}
