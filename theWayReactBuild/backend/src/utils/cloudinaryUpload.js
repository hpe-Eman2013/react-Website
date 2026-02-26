import { v2 as cloudinary } from "cloudinary";

export function uploadBufferToCloudinary({
  buffer,
  folder,
  resourceType,
  filename,
}) {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      {
        folder,
        resource_type: resourceType, // "image" | "raw"
        filename_override: filename,
        use_filename: true,
        unique_filename: true,
      },
      (err, result) => {
        if (err) return reject(err);
        resolve(result);
      },
    );

    stream.end(buffer);
  });
}
