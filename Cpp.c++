#include <emscripten.h>

extern "C" {

// Emulator state variables (simplified)
uint8_t* memory;
size_t romSize;

// Load ROM into memory
EMSCRIPTEN_KEEPALIVE
void loadRom(uint8_t* rom, size_t size) {
    memory = rom;
    romSize = size;
}

// Run emulator (placeholder for actual emulation loop)
EMSCRIPTEN_KEEPALIVE
void run() {
    while (true) {
        // Emulate CPU cycle
        // Emulate GPU rendering
        // Handle input/output
    }
}
}
