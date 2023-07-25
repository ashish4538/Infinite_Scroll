const container=document.querySelector('.container')

const URL='https://picsum.photos/id/'
const x='/200/300'
function getRandNum(){
    return Math.floor((Math.random()*100));
}


function loadImages(numImages=100){
    let i=0;
    while(i<numImages){
        const img=document.createElement('img');
        img.src=`${URL}${getRandNum()}${x}`
        container.appendChild(img)
        i++;
    }
}

loadImages()
  // Initial load

  window.addEventListener('scroll', loadMoreOnScroll);
  // Throttle the scroll event to improve performance
  function loadMoreOnScroll() {
    console.log('Scroll Y:', window.scrollY);
    console.log('Window Inner Height:', window.innerHeight);
    console.log('Document Scroll Height:', document.documentElement.scrollHeight);

    if (window.scrollY + window.innerHeight <= document.documentElement.scrollHeight) {
      console.log('Loading more images...');
      loadImages();
    }
  }

  // Use the throttled version of the scroll event handler


  // Attach the throttled scroll event listener
