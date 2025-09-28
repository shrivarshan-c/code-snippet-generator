"use client";

import { useFonts } from "@/hooks/useFont";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const FontSizeSelector = () => {
    const { fontSize, setFontSize } = useFonts();

    const increaseFontSize = () => setFontSize((prev: number) => prev + 1);
    const decreaseFontSize = () =>
        setFontSize((prev: number) => (prev > 1 ? prev - 1 : 1)); // Prevent < 1

    return (
        <div className="flex flex-col gap-4">
            {/* Font Size Controls */}
            <div className="flex items-center gap-2">
                <Button onClick={decreaseFontSize} variant="outline">
                    -
                </Button>
                <Input
                    type="number"
                    value={fontSize}
                    readOnly
                    className="w-16 text-center"
                />
                <Button onClick={increaseFontSize} variant="outline">
                    +
                </Button>
          </div>
        </div>
    );
};
