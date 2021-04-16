"""
Generate thumbnails for every video in the 'vid' folder, taking the first frame.

Setup, in Terminal:

1. /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
2. brew install ffmpeg
"""

import os

file_path = os.path.realpath(__file__)
dir = os.path.split(file_path)[0]
static = os.path.join("public", "static")

vid_folder = os.path.join(dir, os.path.join(static, "vid"))
thumbs_folder = os.path.join(dir, os.path.join(static, "thumbnails"))
width = 400

for f in os.listdir(vid_folder):
    p = os.path.join(vid_folder, f)
    t = os.path.join(thumbs_folder, os.path.splitext(f)[0] + ".jpg")
    if os.path.isfile(p) and f != ".DS_Store":
        print(f"Processing {f}")
        os.system(f'ffmpeg -i {p} -vf "select=eq(n\,0)" -vf scale={width}:-2 -q:v 3 {t}')
