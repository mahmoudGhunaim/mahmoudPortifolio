// Loaded on demand by <LottiePlayer>. Self-hosts the dotLottie WASM renderer
// instead of fetching it from a CDN.
import { DotLottieReact, setWasmUrl } from '@lottiefiles/dotlottie-react';
import wasmUrl from '@lottiefiles/dotlottie-web/dotlottie-player.wasm?url';

setWasmUrl(wasmUrl);

export default DotLottieReact;
