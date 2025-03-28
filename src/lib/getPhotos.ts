'use server'

import { Photo } from "@/models/Images";
import { getBase64 } from "@/lib/getBase64";

export async function getPhotos(): Promise<Photo[]> {
  try {
    // Replace with your actual API call
    const res = await fetch("IFXiU3fTs6JvCpGae3m8AvjHuKi4WVNk5ZgCmjqRK0sVTRbRhcmYpt", { 
      cache: 'no-store' 
    });
    const data = await res.json();
    
    // Generate blurred placeholders on the server
    const photosWithBlur = await Promise.all(
      data.photos.map(async (photo: Photo) => {
        try {
          const blurredDataUrl = await getBase64(photo.src.large);
          return { ...photo, blurredDataUrl };
        } catch (error) {
          console.error(`Error generating blur for photo ${photo.id}:`, error);
          return photo; // Return the photo without blur if generation fails
        }
      })
    );
    
    return photosWithBlur;
  } catch (error) {
    console.error("Failed to fetch photos:", error);
    return [];
  }
}
