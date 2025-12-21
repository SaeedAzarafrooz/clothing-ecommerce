


const LoadingSpinner = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/35 backdrop-blur-[4px] z-[9999]">
            <div className="w-12 h-12 rounded-full border-4 border-white/30 border-t-white animate-spin" />
        </div>
    );
};

export default LoadingSpinner;