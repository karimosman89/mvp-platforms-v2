#!/bin/bash

# AI MVP Platforms - Quick Setup Script
# This script sets up and launches the AI MVP demonstration platform

set -e

echo "\n🚀 AI MVP Platforms - Professional Demo Suite"
echo "==========================================\n"

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    echo "   Download from: https://nodejs.org/"
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ $NODE_VERSION -lt 18 ]; then
    echo "❌ Node.js version $NODE_VERSION is too old. Please install Node.js 18+"
    exit 1
fi

echo "✅ Node.js $(node -v) detected"

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ package.json not found. Please run this script from the mvp-platforms directory."
    exit 1
fi

echo "📦 Installing dependencies..."
if command -v yarn &> /dev/null; then
    yarn install
else
    npm install
fi

echo "\n🔧 Building the application..."
if command -v yarn &> /dev/null; then
    yarn build
else
    npm run build
fi

echo "\n✨ Setup complete! Your AI MVP Platforms are ready."
echo "\n📋 Available Platforms:"
echo "   • PredictiveOil Pro - Oil & Gas Predictive Maintenance"
echo "   • GridSmart Pro - Smart Grid Management"
echo "   • AutoVision AI - Automotive Quality Control"
echo "   • RiskGuard Pro - Financial Risk Assessment"
echo "   • LogiSmart - Logistics Route Optimization"
echo "   • TradeFlow Pro - Import/Export Supply Chain"
echo "   • RoboVision - Robotics Computer Vision"
echo "   • MedScan AI - Medical Imaging Analysis"

echo "\n🌐 Starting development server..."
echo "   Opening http://localhost:3000 in your browser"
echo "\n💡 Tips:"
echo "   • All platforms include demo data for immediate presentation"
echo "   • Each platform is fully interactive and responsive"
echo "   • Use these demos to showcase AI capabilities to clients"
echo "\n🚀 Launching platform..."

# Start the development server
if command -v yarn &> /dev/null; then
    yarn dev --open
else
    npm run dev -- --open
fi