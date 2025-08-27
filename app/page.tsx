import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8 flex flex-col items-center justify-center min-h-full">
      <div className="text-center space-y-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Super Chat</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Gateway to Leading AI Language Models
        </p>

        {/* AI Chat Services */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* ChatGPT */}
            <Link
              href="https://chatgpt.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 hover:border-gray-200"
            >
              <div className="flex flex-col items-center space-y-4">
                <img
                  src="https://unpkg.com/@lobehub/icons-static-svg@latest/icons/openai.svg"
                  alt="ChatGPT"
                  className="w-16 h-16 group-hover:scale-110 transition-transform duration-300"
                />
                <h3 className="text-2xl font-semibold text-gray-900">
                  ChatGPT
                </h3>
                <p className="text-gray-600 text-center">
                  Official OpenAI ChatGPT Web Version
                </p>
                <div className="text-sm text-orange-600 bg-orange-50 px-3 py-1 rounded-full">
                  US IP Required
                </div>
              </div>
            </Link>

            {/* Grok */}
            <Link
              href="https://grok.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 hover:border-gray-200"
            >
              <div className="flex flex-col items-center space-y-4">
                <img
                  src="https://unpkg.com/@lobehub/icons-static-svg@latest/icons/grok.svg"
                  alt="Grok"
                  className="w-16 h-16 group-hover:scale-110 transition-transform duration-300"
                />
                <h3 className="text-2xl font-semibold text-gray-900">Grok</h3>
                <p className="text-gray-600 text-center">Official xAI Grok Web Version</p>
                <div className="text-sm text-orange-600 bg-orange-50 px-3 py-1 rounded-full">
                  US IP Required
                </div>
              </div>
            </Link>

            {/* Gemini */}
            <div className="space-y-4">
              <Link
                href="https://gemini.google.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 hover:border-gray-200 block"
              >
                <div className="flex flex-col items-center space-y-4">
                  <img
                    src="https://unpkg.com/@lobehub/icons-static-svg@latest/icons/gemini.svg"
                    alt="Gemini"
                    className="w-16 h-16 group-hover:scale-110 transition-transform duration-300"
                  />
                  <h3 className="text-2xl font-semibold text-gray-900">Gemini</h3>
                  <p className="text-gray-600 text-center">
                    Google Gemini Official Web Version
                  </p>
                  <div className="text-sm text-orange-600 bg-orange-50 px-3 py-1 rounded-full">
                    US IP Required
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
                    src="https://unpkg.com/@lobehub/icons-static-svg@latest/icons/gemini.svg"
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
          </div>
        </div>
      </div>
    </div>
  );
}
