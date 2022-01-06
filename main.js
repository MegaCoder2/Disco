function preload()
{

}
function setup()
{
    canvas = createCanvas(500, 500)
    canvas.center()
    video = createCapture(VIDEO)
    video.size(500, 500)
    video.hide()
}
function draw()
{
    image(video, 0, 0, 500, 500)
}
function take_snapshot()
{
    setTimeout(() => {
        r = Math.random() * 255
        g = Math.random() * 255
        b = Math.random() * 255
        tint(r, g, b)
    }, 5000);
    save("disco.mp4")
}
function filter_tint()
{
}