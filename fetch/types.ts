enum BoroughName {
    Manhattan = "Manhattan",
    Bronx = "Bronx",
    Brooklyn = "Brooklyn",
    Queens = "Queens"
}

export interface BuildingInfo {
    pops_number: string;
    borough_name: BoroughName;
    borocode: number;
    community_district: number;
    address_number: string;
    street_name: string;
    zip_code: number;
    building_address_with_zip: string;
    tax_block: number;
    tax_lot: number;
    building_name: string;
    building_location: string;
    year_completed: string;
    building_constructed: string;
    public_space_type: string;
    hours_of_access_required: string;
    amenities_required: string;
    permitted_amenities: string;
    physically_disabled: string;
    latitude: number;
    longitude: number;
}

