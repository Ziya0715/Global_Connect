// "use client";

// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { z } from "zod";
// import { toast } from "sonner";
// import { Button } from "@/components/ui/button/Button";
// import { FormField, Input, Textarea, Select } from "@/components/ui/input/Input";
// import styles from "./EnquiryForm.module.scss";

// const employerSchema = z.object({
//   companyName: z.string().min(2, "Company name is required"),
//   contactPerson: z.string().min(2, "Contact person is required"),
//   email: z.string().email("Valid email is required"),
//   phone: z.string().min(10, "Valid phone number is required"),
//   country: z.string().min(1, "Country is required"),
//   industry: z.string().min(1, "Industry is required"),
//   requirement: z.string().min(1, "Requirement is required"),
//   noOfCandidates: z.string().min(1, "Number of candidates is required"),
//   message: z.string().optional(),
// });

// const attestationSchema = z.object({
//   name: z.string().min(2, "Name is required"),
//   phone: z.string().min(10, "Valid phone is required"),
//   email: z.string().email("Valid email is required"),
//   documentType: z.string().min(1, "Document type is required"),
//   country: z.string().min(1, "Country is required"),
//   message: z.string().optional(),
// });

// const raSchema = z.object({
//   companyName: z.string().min(2, "Company name is required"),
//   name: z.string().min(2, "Name is required"),
//   phone: z.string().min(10, "Valid phone is required"),
//   email: z.string().email("Valid email is required"),
//   businessType: z.string().min(1, "Business type is required"),
//   message: z.string().optional(),
// });

// const contactSchema = z.object({
//   name: z.string().min(2, "Name is required"),
//   email: z.string().email("Valid email is required"),
//   phone: z.string().min(10, "Valid phone is required"),
//   subject: z.string().min(1, "Subject is required"),
//   message: z.string().min(10, "Message is required"),
// });

// const schemas = {
//   employer: employerSchema,
//   attestation: attestationSchema,
//   ra: raSchema,
//   contact: contactSchema,
// };

// export function EnquiryForm({ variant = "employer", title, subtitle }) {
//   const schema = schemas[variant];

//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors, isSubmitting },
//   } = useForm({ resolver: zodResolver(schema) });

//   const onSubmit = (data) => {
//     console.log(`[${variant} enquiry]`, data);
//     toast.success("Thank you! Your enquiry has been submitted successfully.");
//     reset();
//   };

//   return (
//     <div className={styles.card}>
//       {title && <h2 className={styles.title}>{title}</h2>}
//       {subtitle && <p className={styles.subtitle}>{subtitle}</p>}

//       <form onSubmit={handleSubmit(onSubmit)} className={styles.form} noValidate>
//         {variant === "employer" && (
//           <>
//             <div className={styles.grid}>
//               <FormField label="Company Name *" htmlFor="companyName" error={errors.companyName?.message}>
//                 <Input id="companyName" error={errors.companyName} {...register("companyName")} />
//               </FormField>
//               <FormField label="Contact Person *" htmlFor="contactPerson" error={errors.contactPerson?.message}>
//                 <Input id="contactPerson" error={errors.contactPerson} {...register("contactPerson")} />
//               </FormField>
//               <FormField label="Email *" htmlFor="email" error={errors.email?.message}>
//                 <Input id="email" type="email" error={errors.email} {...register("email")} />
//               </FormField>
//               <FormField label="Phone *" htmlFor="phone" error={errors.phone?.message}>
//                 <Input id="phone" type="tel" error={errors.phone} {...register("phone")} />
//               </FormField>
//               <FormField label="Country *" htmlFor="country" error={errors.country?.message}>
//                 <Input id="country" error={errors.country} {...register("country")} />
//               </FormField>
//               <FormField label="Industry *" htmlFor="industry" error={errors.industry?.message}>
//                 <Select id="industry" error={errors.industry} {...register("industry")}>
//                   <option value="">Select industry</option>
//                   <option value="Construction">Construction</option>
//                   <option value="Manufacturing">Manufacturing</option>
//                   <option value="Engineering">Engineering</option>
//                   <option value="Other">Other</option>
//                 </Select>
//               </FormField>
//               <FormField label="Requirement *" htmlFor="requirement" error={errors.requirement?.message}>
//                 <Select id="requirement" error={errors.requirement} {...register("requirement")}>
//                   <option value="">Select requirement</option>
//                   <option value="Skilled">Skilled</option>
//                   <option value="Semi Skilled">Semi Skilled</option>
//                   <option value="Unskilled">Unskilled</option>
//                   <option value="Engineers">Engineers</option>
//                   <option value="Supervisors">Supervisors</option>
//                 </Select>
//               </FormField>
//               <FormField label="No. of Candidates *" htmlFor="noOfCandidates" error={errors.noOfCandidates?.message}>
//                 <Input id="noOfCandidates" error={errors.noOfCandidates} {...register("noOfCandidates")} />
//               </FormField>
//             </div>
//             <FormField label="Message" htmlFor="message" error={errors.message?.message}>
//               <Textarea id="message" error={errors.message} {...register("message")} placeholder="Tell us about your requirements..." />
//             </FormField>
//           </>
//         )}

//         {variant === "attestation" && (
//           <>
//             <div className={styles.grid}>
//               <FormField label="Name *" htmlFor="name" error={errors.name?.message}>
//                 <Input id="name" error={errors.name} {...register("name")} />
//               </FormField>
//               <FormField label="Phone *" htmlFor="phone" error={errors.phone?.message}>
//                 <Input id="phone" type="tel" error={errors.phone} {...register("phone")} />
//               </FormField>
//               <FormField label="Email *" htmlFor="email" error={errors.email?.message}>
//                 <Input id="email" type="email" error={errors.email} {...register("email")} />
//               </FormField>
//               <FormField label="Document Type *" htmlFor="documentType" error={errors.documentType?.message}>
//                 <Select id="documentType" error={errors.documentType} {...register("documentType")}>
//                   <option value="">Select document type</option>
//                   <option value="Educational">Educational</option>
//                   <option value="Personal">Personal</option>
//                   <option value="Commercial">Commercial</option>
//                 </Select>
//               </FormField>
//               <FormField label="Country *" htmlFor="country" error={errors.country?.message}>
//                 <Input id="country" error={errors.country} {...register("country")} />
//               </FormField>
//             </div>
//             <FormField label="Message" htmlFor="message" error={errors.message?.message}>
//               <Textarea id="message" error={errors.message} {...register("message")} />
//             </FormField>
//           </>
//         )}

//         {variant === "ra" && (
//           <>
//             <div className={styles.grid}>
//               <FormField label="Company Name *" htmlFor="companyName" error={errors.companyName?.message}>
//                 <Input id="companyName" error={errors.companyName} {...register("companyName")} />
//               </FormField>
//               <FormField label="Name *" htmlFor="name" error={errors.name?.message}>
//                 <Input id="name" error={errors.name} {...register("name")} />
//               </FormField>
//               <FormField label="Phone *" htmlFor="phone" error={errors.phone?.message}>
//                 <Input id="phone" type="tel" error={errors.phone} {...register("phone")} />
//               </FormField>
//               <FormField label="Email *" htmlFor="email" error={errors.email?.message}>
//                 <Input id="email" type="email" error={errors.email} {...register("email")} />
//               </FormField>
//               <FormField label="Business Type *" htmlFor="businessType" error={errors.businessType?.message}>
//                 <Select id="businessType" error={errors.businessType} {...register("businessType")}>
//                   <option value="">Select business type</option>
//                   <option value="Startup">Startup</option>
//                   <option value="Manpower Agency">Manpower Agency</option>
//                   <option value="Consultancy">Consultancy</option>
//                   <option value="Other">Other</option>
//                 </Select>
//               </FormField>
//             </div>
//             <FormField label="Message" htmlFor="message" error={errors.message?.message}>
//               <Textarea id="message" error={errors.message} {...register("message")} />
//             </FormField>
//           </>
//         )}

//         {variant === "contact" && (
//           <>
//             <div className={styles.grid}>
//               <FormField label="Name *" htmlFor="name" error={errors.name?.message}>
//                 <Input id="name" error={errors.name} {...register("name")} />
//               </FormField>
//               <FormField label="Email *" htmlFor="email" error={errors.email?.message}>
//                 <Input id="email" type="email" error={errors.email} {...register("email")} />
//               </FormField>
//               <FormField label="Phone *" htmlFor="phone" error={errors.phone?.message}>
//                 <Input id="phone" type="tel" error={errors.phone} {...register("phone")} />
//               </FormField>
//               <FormField label="Subject *" htmlFor="subject" error={errors.subject?.message}>
//                 <Input id="subject" error={errors.subject} {...register("subject")} />
//               </FormField>
//             </div>
//             <FormField label="Message *" htmlFor="message" error={errors.message?.message}>
//               <Textarea id="message" error={errors.message} {...register("message")} />
//             </FormField>
//           </>
//         )}

//         <Button type="submit" disabled={isSubmitting} size="lg">
//           {isSubmitting ? "Submitting..." : "Submit Enquiry"}
//         </Button>
//       </form>
//     </div>
//   );
// }



// EnquiryForm.jsx - For Sheet2 (Enquiries without File Upload)
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button/Button";
import { FormField, Input, Textarea, Select } from "@/components/ui/input/Input";
import styles from "./EnquiryForm.module.scss";
import { useState } from "react";

const WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbyt3iJXERnabVMk3kI7oMOZ11vFrtNiQQGKYmbl1Uu7Tz7_TXy1Z2-gHSBSSabWu1Ie0w/exec';

const employerSchema = z.object({
  companyName: z.string().min(2, "Company name is required"),
  contactPerson: z.string().min(2, "Contact person is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  country: z.string().min(1, "Country is required"),
  industry: z.string().min(1, "Industry is required"),
  requirement: z.string().min(1, "Requirement is required"),
  noOfCandidates: z.string().min(1, "Number of candidates is required"),
  message: z.string().optional(),
});

const attestationSchema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(10, "Valid phone is required"),
  email: z.string().email("Valid email is required"),
  documentType: z.string().min(1, "Document type is required"),
  country: z.string().min(1, "Country is required"),
  message: z.string().optional(),
});

const raSchema = z.object({
  companyName: z.string().min(2, "Company name is required"),
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(10, "Valid phone is required"),
  email: z.string().email("Valid email is required"),
  businessType: z.string().min(1, "Business type is required"),
  message: z.string().optional(),
});

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(10, "Valid phone is required"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(10, "Message is required"),
});

const schemas = {
  employer: employerSchema,
  attestation: attestationSchema,
  ra: raSchema,
  contact: contactSchema,
};

// Map variants to sheet names (all go to Sheet2/Enquiries)
const sheetNameMap = {
  employer: 'Enquiries',
  attestation: 'Enquiries',
  ra: 'Enquiries',
  contact: 'Enquiries',
};

// Map variants to form types
const formTypeMap = {
  employer: 'Employer Enquiry',
  attestation: 'Attestation Enquiry',
  ra: 'RA Enquiry',
  contact: 'Contact Enquiry',
};

export function EnquiryForm({ variant = "employer", title, subtitle }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const schema = schemas[variant];

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    
    try {
      const formData = new FormData();
      
      // Get the sheet name (all go to Enquiries sheet)
      const sheetName = sheetNameMap[variant] || 'Enquiries';
      const formType = formTypeMap[variant] || variant;
      
      // Add sheet name
      formData.append('sheetName', sheetName);
      formData.append('jobTitle', formType);
      
      // Map form fields based on variant
      let fullName = '';
      let email = '';
      let phone = '';
      let currentLocation = '';
      let experience = '';
      let message = '';
      
      if (variant === 'employer') {
        fullName = data.contactPerson || '';
        email = data.email || '';
        phone = data.phone || '';
        currentLocation = data.country || '';
        experience = data.industry || '';
        message = `Company: ${data.companyName || ''}. Requirement: ${data.requirement || ''}. Candidates: ${data.noOfCandidates || ''}. ${data.message || ''}`;
      } else if (variant === 'attestation') {
        fullName = data.name || '';
        email = data.email || '';
        phone = data.phone || '';
        currentLocation = data.country || '';
        experience = 'Document Attestation';
        message = `Document Type: ${data.documentType || ''}. ${data.message || ''}`;
      } else if (variant === 'ra') {
        fullName = data.name || '';
        email = data.email || '';
        phone = data.phone || '';
        currentLocation = data.businessType || '';
        experience = 'Recruitment Agency';
        message = `Company: ${data.companyName || ''}. ${data.message || ''}`;
      } else if (variant === 'contact') {
        fullName = data.name || '';
        email = data.email || '';
        phone = data.phone || '';
        currentLocation = '';
        experience = 'Contact Form';
        message = `Subject: ${data.subject || ''}. ${data.message || ''}`;
      }
      
      // Add all form fields
      formData.append('fullName', fullName);
      formData.append('email', email);
      formData.append('phone', phone);
      formData.append('currentLocation', currentLocation);
      formData.append('experience', experience);
      formData.append('message', message);
      
      // No file upload for enquiry forms
      formData.append('fileData', '');
      formData.append('fileName', '');
      formData.append('fileType', '');

      console.log('📤 Sending to sheet:', sheetName);
      console.log('📤 Data:', { formType, fullName, email, phone, currentLocation, experience, message });

      // Send to Google Apps Script
      const response = await fetch(WEB_APP_URL, {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();
      
      if (result.success) {
        toast.success("Thank you! Your enquiry has been submitted successfully.");
        reset();
      } else {
        throw new Error(result.error || 'Submission failed');
      }
      
    } catch (error) {
      console.error('❌ Submission error:', error);
      toast.error(error.message || "Failed to submit. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.card}>
      {title && <h2 className={styles.title}>{title}</h2>}
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}

      <form onSubmit={handleSubmit(onSubmit)} className={styles.form} noValidate>
        {variant === "employer" && (
          <>
            <div className={styles.grid}>
              <FormField label="Company Name *" htmlFor="companyName" error={errors.companyName?.message}>
                <Input id="companyName" error={errors.companyName} {...register("companyName")} />
              </FormField>
              <FormField label="Contact Person *" htmlFor="contactPerson" error={errors.contactPerson?.message}>
                <Input id="contactPerson" error={errors.contactPerson} {...register("contactPerson")} />
              </FormField>
              <FormField label="Email *" htmlFor="email" error={errors.email?.message}>
                <Input id="email" type="email" error={errors.email} {...register("email")} />
              </FormField>
              <FormField label="Phone *" htmlFor="phone" error={errors.phone?.message}>
                <Input id="phone" type="tel" error={errors.phone} {...register("phone")} />
              </FormField>
              <FormField label="Country *" htmlFor="country" error={errors.country?.message}>
                <Input id="country" error={errors.country} {...register("country")} />
              </FormField>
              <FormField label="Industry *" htmlFor="industry" error={errors.industry?.message}>
                <Select id="industry" error={errors.industry} {...register("industry")}>
                  <option value="">Select industry</option>
                  <option value="Construction">Construction</option>
                  <option value="Manufacturing">Manufacturing</option>
                  <option value="Engineering">Engineering</option>
                  <option value="Other">Other</option>
                </Select>
              </FormField>
              <FormField label="Requirement *" htmlFor="requirement" error={errors.requirement?.message}>
                <Select id="requirement" error={errors.requirement} {...register("requirement")}>
                  <option value="">Select requirement</option>
                  <option value="Skilled">Skilled</option>
                  <option value="Semi Skilled">Semi Skilled</option>
                  <option value="Unskilled">Unskilled</option>
                  <option value="Engineers">Engineers</option>
                  <option value="Supervisors">Supervisors</option>
                </Select>
              </FormField>
              <FormField label="No. of Candidates *" htmlFor="noOfCandidates" error={errors.noOfCandidates?.message}>
                <Input id="noOfCandidates" error={errors.noOfCandidates} {...register("noOfCandidates")} />
              </FormField>
            </div>
            <FormField label="Message" htmlFor="message" error={errors.message?.message}>
              <Textarea id="message" error={errors.message} {...register("message")} placeholder="Tell us about your requirements..." />
            </FormField>
          </>
        )}

        {variant === "attestation" && (
          <>
            <div className={styles.grid}>
              <FormField label="Name *" htmlFor="name" error={errors.name?.message}>
                <Input id="name" error={errors.name} {...register("name")} />
              </FormField>
              <FormField label="Phone *" htmlFor="phone" error={errors.phone?.message}>
                <Input id="phone" type="tel" error={errors.phone} {...register("phone")} />
              </FormField>
              <FormField label="Email *" htmlFor="email" error={errors.email?.message}>
                <Input id="email" type="email" error={errors.email} {...register("email")} />
              </FormField>
              <FormField label="Document Type *" htmlFor="documentType" error={errors.documentType?.message}>
                <Select id="documentType" error={errors.documentType} {...register("documentType")}>
                  <option value="">Select document type</option>
                  <option value="Educational">Educational</option>
                  <option value="Personal">Personal</option>
                  <option value="Commercial">Commercial</option>
                </Select>
              </FormField>
              <FormField label="Country *" htmlFor="country" error={errors.country?.message}>
                <Input id="country" error={errors.country} {...register("country")} />
              </FormField>
            </div>
            <FormField label="Message" htmlFor="message" error={errors.message?.message}>
              <Textarea id="message" error={errors.message} {...register("message")} />
            </FormField>
          </>
        )}

        {variant === "ra" && (
          <>
            <div className={styles.grid}>
              <FormField label="Company Name *" htmlFor="companyName" error={errors.companyName?.message}>
                <Input id="companyName" error={errors.companyName} {...register("companyName")} />
              </FormField>
              <FormField label="Name *" htmlFor="name" error={errors.name?.message}>
                <Input id="name" error={errors.name} {...register("name")} />
              </FormField>
              <FormField label="Phone *" htmlFor="phone" error={errors.phone?.message}>
                <Input id="phone" type="tel" error={errors.phone} {...register("phone")} />
              </FormField>
              <FormField label="Email *" htmlFor="email" error={errors.email?.message}>
                <Input id="email" type="email" error={errors.email} {...register("email")} />
              </FormField>
              <FormField label="Business Type *" htmlFor="businessType" error={errors.businessType?.message}>
                <Select id="businessType" error={errors.businessType} {...register("businessType")}>
                  <option value="">Select business type</option>
                  <option value="Startup">Startup</option>
                  <option value="Manpower Agency">Manpower Agency</option>
                  <option value="Consultancy">Consultancy</option>
                  <option value="Other">Other</option>
                </Select>
              </FormField>
            </div>
            <FormField label="Message" htmlFor="message" error={errors.message?.message}>
              <Textarea id="message" error={errors.message} {...register("message")} />
            </FormField>
          </>
        )}

        {variant === "contact" && (
          <>
            <div className={styles.grid}>
              <FormField label="Name *" htmlFor="name" error={errors.name?.message}>
                <Input id="name" error={errors.name} {...register("name")} />
              </FormField>
              <FormField label="Email *" htmlFor="email" error={errors.email?.message}>
                <Input id="email" type="email" error={errors.email} {...register("email")} />
              </FormField>
              <FormField label="Phone *" htmlFor="phone" error={errors.phone?.message}>
                <Input id="phone" type="tel" error={errors.phone} {...register("phone")} />
              </FormField>
              <FormField label="Subject *" htmlFor="subject" error={errors.subject?.message}>
                <Input id="subject" error={errors.subject} {...register("subject")} />
              </FormField>
            </div>
            <FormField label="Message *" htmlFor="message" error={errors.message?.message}>
              <Textarea id="message" error={errors.message} {...register("message")} />
            </FormField>
          </>
        )}

        <Button type="submit" disabled={isSubmitting} size="lg">
          {isSubmitting ? "Submitting..." : "Submit Enquiry"}
        </Button>
      </form>
    </div>
  );
}