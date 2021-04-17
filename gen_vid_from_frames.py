import cv2
import os
import argparse
from tqdm import tqdm

image_type = "jpg"
frame_rate = 30
out_w, out_h = 720, 480

def convert_to_vid(src_folder, export_folder, video_name, frame_rate):
    images = [img for img in os.listdir(src_folder) if img.endswith(image_type)]
    images.sort()
    frame = cv2.imread(os.path.join(src_folder, images[0]))
    height, width, layers = frame.shape
    fourcc = cv2.VideoWriter_fourcc('m', 'p', '4', 'v')
    video = cv2.VideoWriter(os.path.join(export_folder, video_name + ".mp4"), fourcc, frame_rate, (out_w, out_h))
    images = tqdm(images)
    for image in images:
        img = cv2.resize(cv2.imread(os.path.join(src_folder, image))[172:172+761, 330:330+1281], (out_w, out_h))
        video.write(img)

    video.release()

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Convert frames to video.")
    parser.add_argument("src_folder", type=str, help="Choose source folder.")
    parser.add_argument("out_name", type=str, help="Output name.")
    args = parser.parse_args()

    file_path = os.path.realpath(__file__)
    dir = os.path.split(file_path)[0]
    static = os.path.join("public", "static")
    export_folder = os.path.join(dir, os.path.join(static, "vid"))

    convert_to_vid(args.src_folder, export_folder, args.out_name, frame_rate)
