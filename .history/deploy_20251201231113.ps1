# Build the project
npm run build

# Create orphan gh-pages branch
git checkout --orphan gh-pages

# Remove all files from working directory
git rm -rf .

# Copy dist files to root
Copy-Item -Path "dist\*" -Destination "." -Recurse -Force

# Add and commit
git add .
git commit -m "Deploy to gh-pages"

# Push to gh-pages branch
git push origin gh-pages

# Switch back to main
git checkout main