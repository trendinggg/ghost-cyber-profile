#!/bin/bash

# Ghost Cyber Profile - Multi-Platform Deployment Script
# This script builds and deploys the portfolio to GitHub Pages or Vercel

set -e

echo "🚀 Starting multi-platform deployment process..."

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

# Parse command line arguments
DEPLOY_PLATFORM="github"
FORCE_DEPLOY=false

while [[ $# -gt 0 ]]; do
    case $1 in
        --platform)
            DEPLOY_PLATFORM="$2"
            shift 2
            ;;
        --force)
            FORCE_DEPLOY=true
            shift
            ;;
        -h|--help)
            echo "Usage: $0 [--platform github|vercel|netlify] [--force]"
            echo ""
            echo "Options:"
            echo "  --platform    Deployment platform (default: github)"
            echo "  --force       Force deployment without confirmation"
            echo "  -h, --help    Show this help message"
            exit 0
            ;;
        *)
            print_error "Unknown option: $1"
            echo "Use --help for usage information"
            exit 1
            ;;
    esac
done

print_status "Deployment platform: $DEPLOY_PLATFORM"

print_status "Checking git status..."
if [ -n "$(git status --porcelain)" ]; then
    print_warning "You have uncommitted changes."
    if [ "$FORCE_DEPLOY" = false ]; then
        read -p "Continue anyway? (y/N): " -n 1 -r
        echo
        if [[ ! $REPLY =~ ^[Yy]$ ]]; then
            print_status "Deployment cancelled."
            exit 0
        fi
    fi
fi

print_status "Installing dependencies..."
npm ci --only=production

print_status "Running type check..."
npm run type-check

print_status "Running linting..."
npm run lint

# Build based on platform
case $DEPLOY_PLATFORM in
    "github")
        print_status "Building for GitHub Pages..."
        npm run build:github
        ;;
    "vercel")
        print_status "Building for Vercel..."
        npm run build:vercel
        ;;
    "netlify")
        print_status "Building for Netlify..."
        npm run build:netlify
        ;;
    *)
        print_error "Unknown platform: $DEPLOY_PLATFORM"
        exit 1
        ;;
esac

print_status "Checking build output..."
if [ ! -d "dist" ]; then
    print_error "Build failed - dist directory not found"
    exit 1
fi

# Deploy based on platform
case $DEPLOY_PLATFORM in
    "github")
        print_status "Deploying to GitHub Pages..."
        npm run deploy
        print_success "Deployment completed successfully!"
        print_status "Your portfolio should be available at: https://akshatparikh.github.io/ghost-cyber-profile"
        ;;
    "vercel")
        print_status "Deploying to Vercel..."
        if command -v vercel &> /dev/null; then
            vercel --prod
            print_success "Deployment completed successfully!"
        else
            print_warning "Vercel CLI not found. Please deploy manually from Vercel dashboard."
            print_status "Build files are ready in the dist/ directory."
        fi
        ;;
    "netlify")
        print_status "Deploying to Netlify..."
        if command -v netlify &> /dev/null; then
            netlify deploy --prod --dir=dist
            print_success "Deployment completed successfully!"
        else
            print_warning "Netlify CLI not found. Please deploy manually from Netlify dashboard."
            print_status "Build files are ready in the dist/ directory."
        fi
        ;;
esac

print_status "Note: It may take a few minutes for changes to appear."

# Optional: Open the deployed site
if [ "$FORCE_DEPLOY" = false ]; then
    read -p "Open the deployed site in your browser? (y/N): " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        case $DEPLOY_PLATFORM in
            "github")
                if command -v xdg-open &> /dev/null; then
                    xdg-open "https://akshatparikh.github.io/ghost-cyber-profile"
                elif command -v open &> /dev/null; then
                    open "https://akshatparikh.github.io/ghost-cyber-profile"
                elif command -v start &> /dev/null; then
                    start "https://akshatparikh.github.io/ghost-cyber-profile"
                else
                    print_warning "Could not automatically open browser. Please visit: https://akshatparikh.github.io/ghost-cyber-profile"
                fi
                ;;
            *)
                print_warning "Please open your deployment URL manually."
                ;;
        esac
    fi
fi 