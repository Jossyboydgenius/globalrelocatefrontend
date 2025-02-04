import DashboardLayout from "@/components/layouts/DashboardLayout";
import { CountryDropdown } from "@/components/ui/country-dropdown";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import TaxSummary from "@/components/ui/tax-summary";

// Icons
import { PiGlobeHemisphereWestLight } from "react-icons/pi";
import { PiMoneyLight } from "react-icons/pi";
import { FiMinusCircle } from "react-icons/fi";
import { PiUsers } from "react-icons/pi";

function TaxCalculator() {
  const [formData, setFormData] = useState({
    country: "",
    annualIncome: "",
    familyStatus: "",
    totalDeductions: "",
  });

  const [taxSummary, setTaxSummary] = useState(null);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
    // Reset tax summary when inputs change
    setTaxSummary(null);
  };

  const isFormValid = () => {
    return (
      formData.country &&
      formData.annualIncome &&
      formData.familyStatus &&
      formData.totalDeductions
    );
  };

  const calculateTax = () => {
    // This is a simple example calculation
    // In a real app, this would be more complex and probably call an API
    const income = parseFloat(formData.annualIncome);
    const deductions = parseFloat(formData.totalDeductions);
    const taxableIncome = income - deductions;
    
    // Simple 25% tax rate for example
    const taxAmount = taxableIncome * 0.25;
    const effectiveRate = 25;
    const takeHomeAmount = income - taxAmount;

    setTaxSummary({
      taxAmount,
      effectiveRate,
      takeHomeAmount,
    });
  };

  return (
    <DashboardLayout>
      <div className="p-6">
        <div className="overflow-hidden rounded-2xl mb-16">
          {/* Header Section - Purple background */}
          <div className="bg-[#5762D5] text-white px-6 py-8">
            <h2 className="text-3xl font-medium">Tax Calculator</h2>
            <p className="text-base mt-1 opacity-90">
              Calculate your estimated tax burden across different countries
            </p>
          </div>

          {/* Form Section - Grey background */}
          <div className="bg-[#F8F8F8] px-6 py-8 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Country Selection */}
              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center gap-2">
                  <PiGlobeHemisphereWestLight className="text-lg" />
                  Country
                </label>
                <CountryDropdown
                  value={formData.country}
                  onChange={(country) => handleInputChange("country", country.alpha2)}
                  placeholder="Select your country"
                  textSize="sm"
                />
              </div>

              {/* Annual Income */}
              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center gap-2">
                  <PiMoneyLight className="text-lg" />
                  Annual income
                </label>
                <Input
                  type="number"
                  placeholder="Enter your annual income"
                  value={formData.annualIncome}
                  onChange={(e) => handleInputChange("annualIncome", e.target.value)}
                  className="h-12 bg-white text-sm placeholder:text-gray-400"
                  borderColor="gray-300"
                />
              </div>

              {/* Family Status */}
              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center gap-2">
                  <PiUsers className="text-lg" />
                  Family status
                </label>
                <Select
                  value={formData.familyStatus}
                  onValueChange={(value) => handleInputChange("familyStatus", value)}
                >
                  <SelectTrigger className="h-12 bg-white text-sm border-gray-300 focus:ring-gray-300">
                    <SelectValue placeholder="Please select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="single" className="text-sm">Single</SelectItem>
                    <SelectItem value="married" className="text-sm">Married</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Total Deductions */}
              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center gap-2">
                  <FiMinusCircle className="text-lg" />
                  Total deductions
                </label>
                <Input
                  type="number"
                  placeholder="Enter total deductions"
                  value={formData.totalDeductions}
                  onChange={(e) =>
                    handleInputChange("totalDeductions", e.target.value)
                  }
                  className="h-12 bg-white text-sm placeholder:text-gray-400"
                  borderColor="gray-300"
                />
              </div>
            </div>

            {/* Calculate Button */}
            <div className="flex justify-end">
              <Button
                disabled={!isFormValid()}
                onClick={calculateTax}
                className="w-full sm:w-auto px-8 bg-black hover:bg-black/90 text-white rounded-lg"
                size="lg"
              >
                Calculate Tax
              </Button>
            </div>

            {/* Tax Summary */}
            {taxSummary && (
              <div className="mt-8">
                <TaxSummary {...taxSummary} />
              </div>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default TaxCalculator;
