import './styles/style.scss';

var docbody = document.getElementsByTagName('body')[0];
docbody.insertAdjacentHTML('afterbegin', `<div class="bg-white mx-auto max-w-sm shadow-lg rounded-lg overflow-hidden">
  <div class="sm:flex sm:items-center px-6 py-4">
    <img class="block h-16 sm:h-24 rounded-full mx-auto mb-4 sm:mb-0 sm:mr-4 sm:ml-0" src="https://avatars.githubusercontent.com/u/69733629?s=400&u=d58c3626db57068d06d87dfb61475c8099f805c4&v=4" alt=""/>
    <div class="text-center sm:text-left sm:flex-grow">
      <div class="mb-4">
        <p class="text-xl leading-tight">Webmap Developers CODEX</p>
        <p class="text-sm leading-tight text-grey-dark">CODEX Inc.</p>
      </div>
      <div>
        <button class="text-xs font-semibold rounded-full px-4 py-1 leading-normal bg-white border border-purple text-purple hover:bg-purple hover:text-white">Message</button>
      </div>
    </div>
  </div>
</div>`);

const worker = new Worker(new URL('./main-worker.worker.js', import.meta.url));
worker.postMessage({
  question:
    'The Answer to the Ultimate Question of Life, The Universe, and Everything.',
});
worker.onmessage = ({ data: { answer } }) => {
  console.log(answer);
};