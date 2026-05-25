import os
from PIL import Image

def compress_images():
    public_dir = os.path.join(os.getcwd(), 'public')
    if not os.path.exists(public_dir):
        print(f"Error: public directory not found at {public_dir}")
        return

    print(f"Scanning directory: {public_dir}")
    
    # 1. First, delete the completely unused legacy camp images to free up space instantly
    unused_camps = ['camp_1.png', 'camp_2.png', 'camp_3.png', 'camp_4.png']
    for camp in unused_camps:
        camp_path = os.path.join(public_dir, camp)
        if os.path.exists(camp_path):
            size = os.path.getsize(camp_path)
            os.remove(camp_path)
            print(f"Deleted unused legacy asset: {camp} ({size / 1024:.1f} KB)")

    # 2. Get list of files
    files = os.listdir(public_dir)
    image_extensions = ('.png', '.jpg', '.jpeg')
    
    total_before = 0
    total_after = 0
    converted_count = 0

    print("\nStarting image conversion to WebP...")
    for filename in files:
        ext = os.path.splitext(filename)[1].lower()
        if ext in image_extensions:
            # Skip SVGs and non-image files
            src_path = os.path.join(public_dir, filename)
            
            # Skip if it is already a webp file or not a file
            if not os.path.isfile(src_path):
                continue
                
            base_name = os.path.splitext(filename)[0]
            dest_name = f"{base_name}.webp"
            dest_path = os.path.join(public_dir, dest_name)
            
            size_before = os.path.getsize(src_path)
            total_before += size_before
            
            try:
                # Open image
                with Image.open(src_path) as img:
                    # Convert to RGB if saving as WebP from JPEG/PNG (to handle transparency, WebP supports RGBA too)
                    # PIL handles RGBA to WebP automatically. Let's make sure transparent PNGs preserve alpha channel.
                    img.save(dest_path, 'WEBP', quality=82)
                
                size_after = os.path.getsize(dest_path)
                total_after += size_after
                converted_count += 1
                
                # Verify WebP was created successfully and has size > 0
                if os.path.exists(dest_path) and size_after > 0:
                    os.remove(src_path)
                    reduction = (1 - (size_after / size_before)) * 100
                    print(f"[OK] Converted {filename} -> {dest_name} | {size_before/1024:.1f}KB -> {size_after/1024:.1f}KB ({reduction:.1f}% reduction)")
                else:
                    print(f"[FAIL] Failed verification for {filename}")
            except Exception as e:
                print(f"[FAIL] Failed to convert {filename}: {e}")
                
    # Summary
    if converted_count > 0:
        saved_bytes = total_before - total_after
        saving_pct = (1 - (total_after / total_before)) * 100 if total_before > 0 else 0
        print("\n" + "="*50)
        print("COMPRESSION SUMMARY")
        print("="*50)
        print(f"Total Images Optimized: {converted_count}")
        print(f"Total Size Before:      {total_before / (1024*1024):.2f} MB")
        print(f"Total Size After:       {total_after / (1024*1024):.2f} MB")
        print(f"Total Space Saved:      {saved_bytes / (1024*1024):.2f} MB ({saving_pct:.1f}% reduction)")
        print("="*50)
    else:
        print("\nNo image files found for conversion.")

if __name__ == '__main__':
    compress_images()
