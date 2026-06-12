'use client';

import { useState } from 'react';
import { Camera, Upload, Leaf, AlertTriangle, Sprout, Shield, ChevronRight, RotateCcw } from 'lucide-react';
import { Disease, diseases } from '@/lib/diseases';

interface DetectionResult {
  disease: Disease;
  confidence: number;
  alternateDiagnoses: { disease: Disease; confidence: number }[];
}

type AppState = 'upload' | 'analyzing' | 'result';

export default function Home() {
  const [appState, setAppState] = useState<AppState>('upload');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [result, setResult] = useState<DetectionResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleImageSelect = (file: File) => {
    if (!file.type.startsWith('image/')) {
      setError('Please upload an image file');
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      setSelectedImage(e.target?.result as string);
      setError(null);
      analyzeImage(file);
    };
    reader.readAsDataURL(file);
  };

  const analyzeImage = async (file: File) => {
    setAppState('analyzing');

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Mock AI detection - in production this would call TensorFlow/Flask backend
    const randomDisease = diseases[Math.floor(Math.random() * diseases.length)];
    const confidence = 0.80 + Math.random() * 0.18;
    
    const alternates = diseases
      .filter(d => d.id !== randomDisease.id)
      .sort(() => Math.random() - 0.5)
      .slice(0, 2)
      .map((d: Disease) => ({
        disease: d,
        confidence: Math.random() * 0.40
      }));

    setResult({
      disease: randomDisease,
      confidence,
      alternateDiagnoses: alternates
    });
    setAppState('result');
  };

  const reset = () => {
    setAppState('upload');
    setSelectedImage(null);
    setResult(null);
    setError(null);
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'low': return 'bg-green-100 text-green-800 border-green-200';
      case 'moderate': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'high': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'critical': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case 'low': return <Shield className="w-4 h-4" />;
      case 'moderate': return <AlertTriangle className="w-4 h-4" />;
      case 'high': return <AlertTriangle className="w-4 h-4" />;
      case 'critical': return <AlertTriangle className="w-4 h-4" />;
      default: return <Shield className="w-4 h-4" />;
    }
  };

  return (
    <main className="max-w-md mx-auto min-h-screen bg-white shadow-xl">
      {/* Header */}
      <header className="bg-farm-green text-white px-6 py-5 flex items-center gap-3 sticky top-0 z-10">
        <div className="bg-white/20 p-2 rounded-lg">
          <Sprout className="w-6 h-6" />
        </div>
        <div>
          <h1 className="text-lg font-bold leading-tight">CropGuard</h1>
          <p className="text-xs text-farm-light">AI Disease Detector</p>
        </div>
      </header>

      {/* Upload State */}
      {appState === 'upload' && (
        <div className="p-6 space-y-6">
          <div className="text-center space-y-2">
            <div className="bg-farm-light/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto">
              <Camera className="w-10 h-10 text-farm-green" />
            </div>
            <h2 className="text-xl font-bold text-farm-dark">Identify Crop Disease</h2>
            <p className="text-sm text-gray-500">
              Take a photo of the affected leaf, stem, or fruit and our AI will identify the disease and recommend treatment.
            </p>
          </div>

          {/* Upload Area */}
          <label className="block">
            <div className="border-2 border-dashed border-farm-green/30 rounded-2xl p-8 text-center hover:border-farm-green/60 transition-colors cursor-pointer bg-farm-light/5">
              <Upload className="w-8 h-8 text-farm-green mx-auto mb-3" />
              <p className="text-sm font-medium text-farm-dark">Tap to upload a photo</p>
              <p className="text-xs text-gray-400 mt-1">JPG, PNG up to 10MB</p>
            </div>
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => e.target.files?.[0] && handleImageSelect(e.target.files[0])}
            />
          </label>

          {/* Camera Button */}
          <label className="block">
            <div className="bg-farm-green text-white rounded-xl py-3 px-6 flex items-center justify-center gap-2 font-medium cursor-pointer hover:bg-farm-dark transition-colors">
              <Camera className="w-5 h-5" />
              <span>Take a Photo</span>
            </div>
            <input
              type="file"
              accept="image/*"
              capture="environment"
              className="hidden"
              onChange={(e) => e.target.files?.[0] && handleImageSelect(e.target.files[0])}
            />
          </label>

          {error && (
            <div className="bg-red-50 text-red-700 text-sm p-3 rounded-lg flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 flex-shrink-0" />
              {error}
            </div>
          )}

          {/* Supported Crops */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-gray-700">Supported Crops</h3>
            <div className="flex flex-wrap gap-2">
              {['Tomato', 'Potato', 'Corn', 'Pepper', 'Grape', 'Apple', 'Wheat'].map((crop: string) => (
                <span key={crop} className="bg-farm-light/10 text-farm-dark text-xs px-3 py-1.5 rounded-full font-medium border border-farm-light/20">
                  {crop}
                </span>
              ))}
            </div>
          </div>

          {/* Tips */}
          <div className="bg-amber-50 rounded-xl p-4 space-y-2">
            <h3 className="text-sm font-semibold text-amber-800 flex items-center gap-2">
              <Leaf className="w-4 h-4" />
              Photo Tips
            </h3>
            <ul className="text-xs text-amber-700 space-y-1 ml-6 list-disc">
              <li>Ensure good lighting - avoid shadows</li>
              <li>Fill the frame with the affected area</li>
              <li>Include both healthy and diseased tissue</li>
              <li>Keep the camera steady and in focus</li>
            </ul>
          </div>
        </div>
      )}

      {/* Analyzing State */}
      {appState === 'analyzing' && selectedImage && (
        <div className="p-6 space-y-6">
          <div className="text-center space-y-4">
            <div className="relative w-48 h-48 mx-auto">
              <img
                src={selectedImage}
                alt="Analyzing"
                className="w-full h-full object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-black/40 rounded-2xl flex items-center justify-center">
                <div className="w-12 h-12 border-4 border-white/30 border-t-white rounded-full animate-spin" />
              </div>
            </div>
            <div className="space-y-2">
              <h2 className="text-lg font-bold text-farm-dark">Analyzing Image...</h2>
              <p className="text-sm text-gray-500">Our AI is examining the visual patterns to identify potential diseases</p>
            </div>
          </div>

          <div className="space-y-3">
            {[
              'Extracting visual features...',
              'Comparing with disease database...',
              'Generating treatment recommendations...'
            ].map((step: string, i: number) => (
              <div key={i} className="flex items-center gap-3 text-sm text-gray-600">
                <div className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-farm-green animate-pulse' : 'bg-gray-300'}`} />
                {step}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Result State */}
      {appState === 'result' && result && (
        <div className="p-6 space-y-5">
          {/* Image Preview */}
          {selectedImage && (
            <div className="relative">
              <img
                src={selectedImage}
                alt="Detected"
                className="w-full h-48 object-cover rounded-2xl"
              />
              <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-3 py-1.5 rounded-lg backdrop-blur-sm">
                {result.disease.crop}
              </div>
            </div>
          )}

          {/* Diagnosis */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">Diagnosis</span>
              <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border flex items-center gap-1.5 ${getSeverityColor(result.disease.severity)}`}>
                {getSeverityIcon(result.disease.severity)}
                {result.disease.severity.charAt(0).toUpperCase() + result.disease.severity.slice(1)}
              </span>
            </div>
            <h2 className="text-2xl font-bold text-farm-dark">{result.disease.name}</h2>
            <div className="flex items-center gap-2">
              <div className="flex-1 bg-gray-100 rounded-full h-2.5">
                <div
                  className="bg-farm-green h-2.5 rounded-full transition-all duration-1000"
                  style={{ width: `${result.confidence * 100}%` }}
                />
              </div>
              <span className="text-sm font-bold text-farm-green">{(result.confidence * 100).toFixed(1)}%</span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">{result.disease.symptoms}</p>
          </div>

          {/* Yield Impact */}
          <div className="bg-red-50 rounded-xl p-4 border border-red-100">
            <h3 className="text-sm font-semibold text-red-800 flex items-center gap-2 mb-2">
              <AlertTriangle className="w-4 h-4" />
              Yield Impact Estimate
            </h3>
            <p className="text-sm text-red-700 leading-relaxed">{result.disease.yieldImpact}</p>
          </div>

          {/* Treatment */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-gray-700 flex items-center gap-2">
              <Shield className="w-4 h-4 text-farm-green" />
              Recommended Treatment
            </h3>
            <ul className="space-y-2">
              {result.disease.treatment.map((step: string, i: number) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-700 bg-gray-50 p-3 rounded-lg">
                  <span className="bg-farm-green text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ul>
          </div>

          {/* Prevention */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-gray-700 flex items-center gap-2">
              <Leaf className="w-4 h-4 text-farm-green" />
              Prevention Tips
            </h3>
            <ul className="space-y-2">
              {result.disease.prevention.map((tip: string, i: number) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                  <ChevronRight className="w-4 h-4 text-farm-light flex-shrink-0 mt-0.5" />
                  {tip}
                </li>
              ))}
            </ul>
          </div>

          {/* Alternate Diagnoses */}
          {result.alternateDiagnoses.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-gray-700">Other Possibilities</h3>
              {result.alternateDiagnoses.map((alt: { disease: Disease; confidence: number }, i: number) => (
                <div key={i} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                  <div>
                    <p className="text-sm font-medium text-gray-800">{alt.disease.name}</p>
                    <p className="text-xs text-gray-500">{alt.disease.crop}</p>
                  </div>
                  <span className="text-xs font-medium text-gray-600">{(alt.confidence * 100).toFixed(1)}%</span>
                </div>
              ))}
            </div>
          )}

          {/* Actions */}
          <button
            onClick={reset}
            className="w-full bg-farm-green text-white rounded-xl py-3.5 px-6 flex items-center justify-center gap-2 font-medium hover:bg-farm-dark transition-colors"
          >
            <RotateCcw className="w-5 h-5" />
            Scan Another Plant
          </button>
        </div>
      )}
    </main>
  );
}
