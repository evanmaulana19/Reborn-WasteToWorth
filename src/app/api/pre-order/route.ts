import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { businessName, ownerName, dailyVolume, email, phone } = body;

    // Validate fields
    if (!businessName || !ownerName || !dailyVolume || !email || !phone) {
      return NextResponse.json(
        { error: "Semua data formulir wajib diisi." },
        { status: 400 }
      );
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    // Fall back to anon key if service role is not defined
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseKey) {
      console.warn("Supabase credentials missing. Running in mock mode.");
      
      // Simulate server-side latency for mock testing
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      return NextResponse.json({
        success: true,
        message: "Pre-order berhasil terkirim! (Simulasi Mode - Supabase Belum Terkoneksi)",
        data: {
          business_name: businessName,
          owner_name: ownerName,
          daily_volume: parseInt(dailyVolume),
          email,
          phone,
          created_at: new Date().toISOString(),
        },
        mocked: true,
      });
    }

    const supabase = createClient(supabaseUrl, supabaseKey);

    const { data, error } = await supabase
      .from("b2b_orders")
      .insert([
        {
          business_name: businessName,
          owner_name: ownerName,
          daily_volume: parseInt(dailyVolume),
          email,
          phone,
        },
      ])
      .select();

    if (error) {
      console.error("Supabase Database Error:", error);
      return NextResponse.json(
        { error: `Gagal menyimpan pre-order: ${error.message}` },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Pre-order berhasil terdaftar di database REBORN!",
      data: data[0],
    });
  } catch (err: unknown) {
    console.error("API Pre-Order Error:", err);
    const errorMessage = err instanceof Error ? err.message : String(err);
    return NextResponse.json(
      { error: `Kesalahan Internal Server: ${errorMessage}` },
      { status: 500 }
    );
  }
}
