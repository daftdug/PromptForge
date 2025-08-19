import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function VideoModal({ isOpen, onClose }: VideoModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
      
      // Auto-play video when modal opens
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play().catch(console.log);
      }
    } else {
      document.body.style.overflow = 'unset';
      
      // Pause video when modal closes
      if (videoRef.current) {
        videoRef.current.pause();
      }
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === modalRef.current) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      ref={modalRef}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={handleBackdropClick}
      data-testid="video-modal-overlay"
    >
      <div className="relative w-full max-w-4xl bg-prompt-dark rounded-2xl border border-prompt-purple/30 overflow-hidden shadow-2xl">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-prompt-slate/20">
          <h2 className="text-2xl font-bold text-white" data-testid="video-modal-title">
            Prompt Magic Demo
          </h2>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="text-gray-400 hover:text-white"
            data-testid="video-modal-close"
          >
            <X className="h-6 w-6" />
          </Button>
        </div>
        
        {/* Video Content */}
        <div className="relative bg-black">
          <video
            ref={videoRef}
            controls
            className="w-full h-auto max-h-[70vh]"
            poster="/api/placeholder/800/450"
            data-testid="demo-video-player"
          >
            <source src="/attached_assets/5977124-uhd_3840_2160_25fps_1755619421750.mp4" type="video/mp4" />
            <source src="/attached_assets/4146195-uhd_3840_2160_25fps_1755619470462.mp4" type="video/mp4" />
            <source src="/attached_assets/2516159-hd_1920_1080_24fps_1755619470465.mp4" type="video/mp4" />
            <source src="/attached_assets/4426378-uhd_3840_2160_25fps_1755619470465.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          {/* Fallback content if video doesn't load */}
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-prompt-purple/20 to-prompt-cyan/20" style={{ zIndex: -1 }}>
            <div className="text-center p-8">
              <div className="text-6xl font-black mb-4">
                <span className="bg-gradient-to-r from-prompt-purple to-prompt-cyan bg-clip-text text-transparent">
                  Prompt Magic
                </span>
              </div>
              <p className="text-gray-300 text-xl">Demo Video Coming Soon</p>
              <p className="text-gray-400 mt-2">Experience the power of AI prompt management</p>
            </div>
          </div>
        </div>
        
        {/* Modal Footer */}
        <div className="p-6 border-t border-prompt-slate/20 bg-prompt-slate/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-gray-300">
              <p className="font-medium">Ready to get started?</p>
              <p className="text-sm text-gray-400">Join thousands of creators using Prompt Magic</p>
            </div>
            <Button 
              onClick={() => window.open('https://promptmagic.dev', '_blank')}
              className="bg-cta-gradient hover:shadow-lg hover:shadow-prompt-purple/25 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
              data-testid="video-modal-cta"
            >
              Start Free Today
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}