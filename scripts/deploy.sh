#!/bin/bash

# Ghost Cyber Profile - Deployment Script
# This script builds and deploys the portfolio to GitHub Pages

set -e

echo "🚀 Starting deployment process..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    print_error "package.json not found. Please run this script from the project root."
    exit 1
fi

# Check if git is available
if ! command -v git &> /dev/null; then
    print_error "Git is not installed or not in PATH"
    exit 1
fi

# Check if we're in a git repository
if [ ! -d ".git" ]; then
    print_error "Not in a git repository. Please initialize git first."
    exit 1
fi

print_status "Checking git status..."
if [ -n "$(git status --porcelain)" ]; then
    print_warning "You have uncommitted changes. Consider committing them before deployment."
    read -p "Continue anyway? (y/N): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        print_status "Deployment cancelled."
        exit 0
    fi
fi

print_status "Installing dependencies..."
npm ci --only=production

print_status "Running type check..."
npm run type-check

print_status "Running linting..."
npm run lint

print_status "Building for production..."
npm run build:prod

print_status "Checking build output..."
if [ ! -d "dist" ]; then
    print_error "Build failed - dist directory not found"
    exit 1
fi

print_status "Deploying to GitHub Pages..."
npm run deploy

print_success "Deployment completed successfully!"
print_status "Your portfolio should be available at: https://akshatparikh.github.io/ghost-cyber-profile"
print_status "Note: It may take a few minutes for changes to appear."

# Optional: Open the deployed site
read -p "Open the deployed site in your browser? (y/N): " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    if command -v xdg-open &> /dev/null; then
        xdg-open "https://akshatparikh.github.io/ghost-cyber-profile"
    elif command -v open &> /dev/null; then
        open "https://akshatparikh.github.io/ghost-cyber-profile"
    elif command -v start &> /dev/null; then
        start "https://akshatparikh.github.io/ghost-cyber-profile"
    else
        print_warning "Could not automatically open browser. Please visit: https://akshatparikh.github.io/ghost-cyber-profile"
    fi
fi 