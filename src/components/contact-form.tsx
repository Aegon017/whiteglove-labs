"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function ContactForm() {
    const [ submitted, setSubmitted ] = useState( false )
    const [ isSubmitting, setIsSubmitting ] = useState( false )

    const handleSubmit = ( e: React.FormEvent ) => {
        e.preventDefault()
        setIsSubmitting( true )

        setTimeout( () => {
            setSubmitted( true )
            setIsSubmitting( false )
        }, 1000 )
    }

    if ( submitted ) {
        return (
            <div className="rounded-lg border border border-accent-foreground bg-card p-6 text-card-foreground shadow-sm">
                <h3 className="mb-2 text-lg font-semibold">
                    Thank you for reaching out!
                </h3>
                <p className="text-muted-foreground">
                    We&apos;ve received your message and will get back to you within one
                    business day.
                </p>
                <Button
                    variant="outline"
                    className="mt-4 border border-accent-foreground text-foreground hover:bg-accent hover:text-accent-foreground"
                    onClick={ () => setSubmitted( false ) }
                >
                    Send another message
                </Button>
            </div>
        )
    }

    return (
        <form onSubmit={ handleSubmit } className="space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                    <Label className="text-foreground" htmlFor="full-name">Full name</Label>
                    <Input
                        id="full-name"
                        name="full-name"
                        className="border border-accent-foreground/20 focus:ring-ring"
                        required
                        autoComplete="name"
                    />
                </div>
                <div className="space-y-2">
                    <Label className="text-foreground" htmlFor="email">Email</Label>
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        className="border border-accent-foreground/20 focus:ring-ring"
                        required
                        autoComplete="email"
                    />
                </div>
            </div>

            <div className="space-y-2">
                <Label className="text-foreground" htmlFor="message">Message</Label>
                <Textarea
                    id="message"
                    name="message"
                    rows={ 5 }
                    className="min-h-[120px] border border-accent-foreground/20 focus:ring-ring"
                    required
                />
            </div>

            <div>
                <Button
                    type="submit"
                    className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                    disabled={ isSubmitting }
                >
                    { isSubmitting ? "Sending..." : "Send message" }
                </Button>
            </div>
        </form>
    )
}