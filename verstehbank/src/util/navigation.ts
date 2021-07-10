import { goto } from '$app/navigation';
import { base } from '$app/paths';

function rootRelative(path) : string {
    return  base + path;
}

export { rootRelative, goto };