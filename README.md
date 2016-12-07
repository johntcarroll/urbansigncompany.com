## Deploy Script for AWS Server

```
cd /home/ec2-user/urbansign.com
sudo git checkout master
sudo git pull origin master
echo "PULL COMPLETED"
bundle install
bundle exec jekyll build
echo "BUILD COMPLETE"
cd /var/www/html
sudo rm -r *
echo "OLD FILES DELETED"
cd /home/ec2-user/urbansign.com/build
sudo cp -r * /var/www/html
echo "NEW FILES LIVE"
cd /var/www/html/assets
sudo mkdir work-sans
cd /home/ec2-user/urbansign.com/source/_assets/fonts/work-sans
sudo cp -r * /var/www/html/assets/work-sans
echo "FONT TRANSFER COMPLETE"
```

## How to Derotate images

```
find and download exiftool.exe. Drop into same folder as images. Run these commands:
```

```
exiftool.exe -ifd1:all= file.jpg
```

```
exiftool.exe -Orientation=1 -n zoo-wayfinding-md-4.jpg
```
