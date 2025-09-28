"use client"
import { ThemeContext } from '@/context/ThemContext'
import { useContext } from 'react';

export function useTheme()
{
    const ctx = useContext(ThemeContext);

    if(!ctx)
    {
        throw new Error("useTheme must be used within a Theme provider");
    }
    return ctx;
}
