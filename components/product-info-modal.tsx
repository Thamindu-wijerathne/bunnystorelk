"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { FaWhatsapp } from "react-icons/fa"
import { Minus, Plus, ShoppingCart, Star } from "lucide-react"
import { Input } from "@/components/ui/input"

interface Product {
    id: number
    name: string
    category: string
    price: number
    rating: number
    reviews: number
    image: string
    description?: string
}

interface ProductInfoModalProps {
    product: Product
    trigger: React.ReactNode
}

export function ProductInfoModal({ product, trigger }: ProductInfoModalProps) {
    const [open, setOpen] = useState(false)
    const [quantity, setQuantity] = useState(1)

    const incrementQuantity = () => setQuantity((prev) => prev + 1)
    const decrementQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))

    const totalprice = product.price * quantity

    const handleBuyOnWhatsApp = () => {
        const phoneNumber = "9470210040"
        const total = product.price * quantity
        const message = `*New Order Inquiry*
            Product: ${product.name}
            Category: ${product.category}
            Price: Rs. ${totalprice}
            Quantity: ${quantity}
            Total: Rs. ${total.toLocaleString()}
            
            Please provide more details on how to proceed.`

        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
        window.open(whatsappUrl, "_blank")
        setOpen(false)
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                {trigger}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[800px] p-0 overflow-hidden">
                <div className="grid md:grid-cols-2 gap-0">
                    {/* Product Image */}
                    <div className="bg-white h-64 md:h-full relative flex items-center justify-center p-6">
                        <img
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            className="w-full h-full object-contain mix-blend-multiply"
                        />
                    </div>

                    {/* Product Details */}
                    <div className="p-6 md:p-8 flex flex-col justify-center">
                        <div className="mb-2">
                            <span className="text-sm font-medium text-primary bg-primary/10 px-2 py-1 rounded-md">
                                {product.category}
                            </span>
                        </div>

                        <DialogTitle className="text-2xl md:text-3xl font-bold mb-2 pt-2">{product.name}</DialogTitle>

                        <div className="flex items-center gap-2 mb-4">
                            <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className={`w-4 h-4 ${i < Math.floor(product.rating) ? "fill-primary text-primary" : "text-muted-foreground/30"}`}
                                    />
                                ))}
                            </div>
                            <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
                        </div>

                        <div className="text-3xl font-bold text-foreground mb-6">
                            Rs. {totalprice}
                        </div>

                        {product.description && (
                            <DialogDescription className="text-muted-foreground mb-6">
                                {product.description}
                            </DialogDescription>
                        )}

                        <div className="space-y-6">
                            {/* Quantity Selector */}
                            <div className="flex items-center gap-4">
                                <span className="font-medium">Quantity:</span>
                                <div className="flex items-center border rounded-md">
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="h-9 w-9"
                                        onClick={decrementQuantity}
                                        disabled={quantity <= 1}
                                    >
                                        <Minus className="h-4 w-4" />
                                    </Button>
                                    <Input
                                        type="number"
                                        min="1"
                                        value={quantity}
                                        onChange={(e) => {
                                            const val = parseInt(e.target.value)
                                            if (!isNaN(val) && val >= 1) setQuantity(val)
                                        }}
                                        className="w-14 h-9 border-0 text-center focus-visible:ring-0 p-0"
                                    />
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="h-9 w-9"
                                        onClick={incrementQuantity}
                                    >
                                        <Plus className="h-4 w-4" />
                                    </Button>
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="flex flex-col gap-3">
                                <Button
                                    size="lg"
                                    className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white"
                                    onClick={handleBuyOnWhatsApp}
                                >
                                    <FaWhatsapp className="mr-2 h-5 w-5" />
                                    Buy on WhatsApp
                                </Button>
                                {/* <Button variant="outline" size="lg" className="w-full">
                                    <ShoppingCart className="mr-2 h-5 w-5" />
                                    Add to Cart
                                </Button> */}
                            </div>

                            <p className="text-xs text-center text-muted-foreground">
                                Free shipping on orders over Rs. 15,000
                            </p>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}
