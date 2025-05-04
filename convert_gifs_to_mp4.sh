#!/bin/bash

# Set the working directory
cd ./docs/media/gif || exit

# Loop through all .gif files
for gif in *.gif; do
  # Skip if no gifs found
  [ -e "$gif" ] || continue

  mp4="../mp4/${gif%.gif}.mp4"

  echo "🎞️ Converting $gif to $mp4..."
  ffmpeg -y -i "$gif" -movflags faststart -pix_fmt yuv420p -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" "$mp4"
done

echo "✅ Conversion complete!"
