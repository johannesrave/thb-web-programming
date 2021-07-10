import { goto } from '$app/navigation';
import { base } from '$app/paths';

function rootRelative(path:string) : string {
    return  base + path;
}

export { rootRelative, goto };