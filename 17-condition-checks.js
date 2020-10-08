const ct = {
    address: {
        city: "London"
    }
};

if (ct && ct.address && ct.address.city) {
    console.log(ct.address.city);
} else {
    console.log("No City");
}

// Simplify the if-else blocks