function newGPUErrorHandling(gpu_brand, gpu_model, gpu_memory, errorMessages) {
    if (!gpu_brand) {
        errorMessages.push('GPU brand is required.');
    } else {
        if (gpu_brand !== 'AMD' && gpu_brand !== 'NVIDIA') {
            errorMessages.push('GPU brand not accepted.')
        }
    };
    if (!gpu_model) {
        errorMessages.push('GPU model is required.');
    };
    if (!gpu_memory) {
        errorMessages.push('GPU memory is required.');
    };
};

export default newGPUErrorHandling;