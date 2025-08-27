'use client';

import { useState } from 'react';
import Link from 'next/link';
import IPDetector from './IPDetector';

interface AIService {
  id: string;
  name: string;
  url: string;
  description: string;
  icon: string;
  ipRequirement: string;
  badgeColor: string;
}

interface LocationInfo {
  flag: string;
  displayLocation: string;
  supportedServices: string[];
}

const aiServices: AIService[] = [
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    url: 'https://chatgpt.com/',
    description: 'Official OpenAI ChatGPT Web Version',
    icon: 'https://unpkg.com/@lobehub/icons-static-svg@latest/icons/openai.svg',
    ipRequirement: 'US IP Required',
    badgeColor: 'text-orange-600 bg-orange-50'
  },
  {
    id: 'grok',
    name: 'Grok',
    url: 'https://grok.com/',
    description: 'Official xAI Grok Web Version',
    icon: 'https://unpkg.com/@lobehub/icons-static-svg@latest/icons/grok.svg',
    ipRequirement: 'US IP Required',
    badgeColor: 'text-orange-600 bg-orange-50'
  },
  {
    id: 'gemini',
    name: 'Gemini',
    url: 'https://gemini.google.com/',
    description: 'Google Gemini Official Web Version',
    icon: 'https://unpkg.com/@lobehub/icons-static-svg@latest/icons/gemini.svg',
    ipRequirement: 'US IP Required',
    badgeColor: 'text-orange-600 bg-orange-50'
  },
  {
    id: 'claude',
    name: 'Claude',
    url: 'https://claude.ai/',
    description: 'Anthropic Claude AI Assistant',
    icon: 'https://unpkg.com/@lobehub/icons-static-svg@latest/icons/claude.svg',
    ipRequirement: 'Taiwan IP Required',
    badgeColor: 'text-blue-600 bg-blue-50'
  }
];

export default function AIServicesDisplay() {
  const [locationInfo, setLocationInfo] = useState<LocationInfo | null>(null);

  const handleLocationChange = (newLocationInfo: LocationInfo) => {
    setLocationInfo(newLocationInfo);
  };

  // 根据IP地址过滤可用的AI服务
  const availableServices = locationInfo 
    ? aiServices.filter(service => locationInfo.supportedServices.includes(service.id))
    : [];

  // 处理特殊情况：Gemini需要显示两个入口
  const geminiService = availableServices.find(service => service.id === 'gemini');
  const otherServices = availableServices.filter(service => service.id !== 'gemini');

  return (
    <>
      {/* IP Detection */}
      <div className="mt-6">
        <IPDetector onLocationChange={handleLocationChange} />
      </div>

      {/* AI Chat Services */}
      <div className="py-16">
        {!locationInfo ? (
          <div className="text-center text-gray-500">
            <div className="animate-pulse text-sm">Loading available services...</div>
          </div>
        ) : availableServices.length === 0 ? (
          <div className="text-center text-gray-500 max-w-md mx-auto">
            <div className="text-6xl mb-4">😅</div>
            <h3 className="text-xl font-semibold mb-2">No Services Available</h3>
            <p className="text-sm">
              Sorry, no AI chat services are currently accessible from your location. 
              You may need to use a VPN to access these services.
            </p>
          </div>
        ) : (
          <div className={`grid gap-8 max-w-6xl mx-auto ${
            availableServices.length === 1 ? 'grid-cols-1 max-w-sm' :
            availableServices.length === 2 ? 'grid-cols-1 md:grid-cols-2 max-w-2xl' :
            availableServices.length === 3 ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' :
            'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
          }`}>
            {otherServices.map((service) => (
              <Link
                key={service.id}
                href={service.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 hover:border-gray-200"
              >
                <div className="flex flex-col items-center space-y-4">
                  <img
                    src={service.icon}
                    alt={service.name}
                    className="w-16 h-16 group-hover:scale-110 transition-transform duration-300"
                  />
                  <h3 className="text-2xl font-semibold text-gray-900">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 text-center">
                    {service.description}
                  </p>
                  <div className={`text-sm px-3 py-1 rounded-full ${service.badgeColor}`}>
                    {service.ipRequirement}
                  </div>
                </div>
              </Link>
            ))}

            {/* 特殊处理 Gemini 的两个入口 */}
            {geminiService && (
              <div className="space-y-4">
                <Link
                  href={geminiService.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 hover:border-gray-200 block"
                >
                  <div className="flex flex-col items-center space-y-4">
                    <img
                      src={geminiService.icon}
                      alt={geminiService.name}
                      className="w-16 h-16 group-hover:scale-110 transition-transform duration-300"
                    />
                    <h3 className="text-2xl font-semibold text-gray-900">{geminiService.name}</h3>
                    <p className="text-gray-600 text-center">
                      {geminiService.description}
                    </p>
                    <div className={`text-sm px-3 py-1 rounded-full ${geminiService.badgeColor}`}>
                      {geminiService.ipRequirement}
                    </div>
                  </div>
                </Link>
                
                <Link
                  href="https://aistudio.google.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-gray-200 block"
                >
                  <div className="flex flex-col items-center space-y-3">
                    <img
                      src={geminiService.icon}
                      alt="AI Studio"
                      className="w-12 h-12 group-hover:scale-110 transition-transform duration-300"
                    />
                    <h4 className="text-lg font-semibold text-gray-900">AI Studio</h4>
                    <p className="text-gray-600 text-center text-sm">
                      Google AI Studio - Developer Platform
                    </p>
                    <div className="text-xs text-orange-600 bg-orange-50 px-2 py-1 rounded-full">
                      US IP Required
                    </div>
                  </div>
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}