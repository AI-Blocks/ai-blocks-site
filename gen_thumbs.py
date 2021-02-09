import os

vid_folder = "public/static/vid"
thumbs_folder = "public/static/vid/thumbnails"
width = 400

for f in os.listdir(vid_folder):
    p = os.path.join(vid_folder, f)
    t = os.path.join(thumbs_folder, os.path.splitext(f)[0] + ".jpg")
    if os.path.isfile(p) and f != ".DS_Store":
        print(f"Processing {f}")
        os.system(f'ffmpeg -i {p} -vf "select=eq(n\,0)" -vf scale={width}:-2 -q:v 3 {t}')
