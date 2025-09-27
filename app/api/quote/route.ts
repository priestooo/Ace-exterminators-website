import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, address, propertyType, pestType, severity, preferredDate, additionalInfo } = body

    // Validate required fields
    if (!name || !email || !phone || !address) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Generate a quote ID
    const quoteId = `ACE-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`

    // Here you would typically:
    // 1. Save quote request to database
    // 2. Calculate preliminary pricing based on property type and pest type
    // 3. Schedule inspection if needed
    // 4. Send confirmation email
    // 5. Notify sales team

    console.log("Quote request:", {
      quoteId,
      name,
      email,
      phone,
      address,
      propertyType,
      pestType,
      severity,
      preferredDate,
      additionalInfo,
      timestamp: new Date().toISOString(),
    })

    // Simulate processing
    await new Promise((resolve) => setTimeout(resolve, 1500))

    return NextResponse.json({
      message: "Quote request submitted successfully!",
      quoteId,
      estimatedResponse: "24 hours",
      nextSteps: [
        "We will review your request",
        "Schedule a free inspection",
        "Provide detailed quote within 24 hours",
      ],
    })
  } catch (error) {
    console.error("Quote request error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
