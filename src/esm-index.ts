/** @hidden @module */
import { Buffer } from 'buffer';
if (typeof window !== 'undefined') {
    window.Buffer = Buffer;
}
import * as nearApi from './browser-index';
export default nearApi;