// ApplyForm.jsx - Updated with Base64 file handling
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button/Button";
import { FormField, Input, Textarea, FileInput } from "@/components/ui/input/Input";
import styles from "../enquiry-form/EnquiryForm.module.scss";
import { useState } from "react";

const applySchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(10, "Valid phone is required"),
  currentLocation: z.string().min(2, "Current location is required"),
  experience: z.string().min(1, "Experience is required"),
  message: z.string().optional(),
  resume: z.any().optional(),
});

// IMPORTANT: Replace with your deployed web app URL
const WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbyt3iJXERnabVMk3kI7oMOZ11vFrtNiQQGKYmbl1Uu7Tz7_TXy1Z2-gHSBSSabWu1Ie0w/exec';

export function ApplyForm({ jobTitle, onSuccess }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(applySchema) });

  // Convert file to base64
  const fileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        // Remove the data URL prefix (e.g., "data:application/pdf;base64,")
        const base64String = reader.result.split(',')[1];
        resolve(base64String);
      };
      reader.onerror = (error) => reject(error);
    });
  };

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    
    try {
      const formData = new FormData();
      
      // Add all form fields
      formData.append('jobTitle', jobTitle || '');
      formData.append('fullName', data.fullName || '');
      formData.append('email', data.email || '');
      formData.append('phone', data.phone || '');
      formData.append('currentLocation', data.currentLocation || '');
      formData.append('experience', data.experience || '');
      formData.append('message', data.message || '');
      
      // Handle file upload - Convert to base64
      if (data.resume && data.resume.length > 0) {
        const file = data.resume[0];
        
        // Convert file to base64
        const base64Data = await fileToBase64(file);
        
        // Append file data as base64
        formData.append('fileData', base64Data);
        formData.append('fileName', file.name);
        formData.append('fileType', file.type);
        
        console.log('✅ File converted to base64:', file.name, file.size, 'bytes');
      } else {
        console.log('ℹ️ No file selected');
        formData.append('fileData', '');
        formData.append('fileName', '');
        formData.append('fileType', '');
      }

      // Send to Google Apps Script
      const response = await fetch(WEB_APP_URL, {
        method: 'POST',
        body: formData,
        // Remove no-cors to get proper response
      });

      const result = await response.json();
      
      if (result.success) {
        toast.success(result.message || "Application submitted successfully!");
        reset();
        setSelectedFile(null);
        
        // Reset file input
        const fileInput = document.getElementById('resume');
        if (fileInput) fileInput.value = '';
        
        onSuccess?.();
      } else {
        throw new Error(result.error || 'Submission failed');
      }
      
    } catch (error) {
      console.error('❌ Submission error:', error);
      toast.error(error.message || "Failed to submit application. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form} noValidate>
      <div className={styles.grid}>
        <FormField label="Full Name *" htmlFor="fullName" error={errors.fullName?.message}>
          <Input id="fullName" error={errors.fullName} {...register("fullName")} />
        </FormField>
        <FormField label="Email *" htmlFor="email" error={errors.email?.message}>
          <Input id="email" type="email" error={errors.email} {...register("email")} />
        </FormField>
        <FormField label="Phone *" htmlFor="phone" error={errors.phone?.message}>
          <Input id="phone" type="tel" error={errors.phone} {...register("phone")} />
        </FormField>
        <FormField label="Current Location *" htmlFor="currentLocation" error={errors.currentLocation?.message}>
          <Input id="currentLocation" error={errors.currentLocation} {...register("currentLocation")} />
        </FormField>
        <FormField label="Experience *" htmlFor="experience" error={errors.experience?.message}>
          <Input id="experience" error={errors.experience} placeholder="e.g. 3 Years" {...register("experience")} />
        </FormField>
        <FormField label="Resume Upload" htmlFor="resume">
          <FileInput 
            id="resume" 
            accept=".pdf,.doc,.docx,.txt" 
            {...register("resume")}
            onChange={(e) => {
              if (e.target.files && e.target.files.length > 0) {
                setSelectedFile(e.target.files[0]);
              } else {
                setSelectedFile(null);
              }
            }}
          />
          {selectedFile && (
            <p style={{ fontSize: '12px', color: '#666', marginTop: '4px' }}>
              ✅ Selected: {selectedFile.name} ({(selectedFile.size / 1024).toFixed(1)} KB)
            </p>
          )}
        </FormField>
      </div>
      <FormField label="Message" htmlFor="message" error={errors.message?.message}>
        <Textarea id="message" error={errors.message} {...register("message")} placeholder="Tell us about yourself..." />
      </FormField>
      <Button type="submit" disabled={isSubmitting} fullWidth>
        {isSubmitting ? "Submitting..." : "Submit Application"}
      </Button>
    </form>
  );
}