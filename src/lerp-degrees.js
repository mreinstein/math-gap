import clamp from './clamp.js'
import lerp  from './lerp.js'


// from https://gist.github.com/shaunlebron/8832585?permalink_comment_id=3227412#gistcomment-3227412

// lerp between degrees a -> b by t
export default function lerpTheta (a, b, t) {
    const dt = repeat(b - a, 360);
    return lerp(a, a + (dt > 180 ? dt - 360 : dt), t);
}


function repeat (t, m) {
    return clamp(t - Math.floor(t / m) * m, 0, m);
}
