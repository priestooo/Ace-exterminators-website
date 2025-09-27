import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, service, message, emergency } = body

    // Validate required fields
    if (!name || !email || !phone) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Here you would typically:
    // 1. Save to database
    // 2. Send email notification
    // 3. Send SMS for emergency requests
    // 4. Integrate with CRM system

    // For now, we'll just log the submission
    console.log("Contact form submission:", {
      name,
      email,
      phone,
      service,
      message,
      emergency,
      timestamp: new Date().toISOString(),
    })

    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Send different responses based on emergency status
    if (emergency) {
      // In a real app, you'd trigger immediate notifications here
      return NextResponse.json({
        message: "Emergency request received! We will contact you within 1 hour.",
        priority: "emergency",
      })
    }

    return NextResponse.json({
      message: "Thank you for your inquiry! We will contact you within 24 hours.",
      priority: "normal",
    })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
