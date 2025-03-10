"use client";
import React from "react";
import { Page, Text, View, Document, StyleSheet, PDFViewer, Image } from "@react-pdf/renderer";
import { WaterCan } from "@/store/plant/can/can.service";

// Define styles
const styles = StyleSheet.create({
    page: {
        flexDirection: "row",
        // padding: 20,
        justifyContent: "center",
        alignItems: "center"
    },
    qrGrid: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        width: "100%",
        height: "100%",
        justifyContent: "flex-start",
    },
    qrContainer: {
        width: "2.2in", // Adjust for 5 per row
        height: "2.2in",
        margin: 0,
        alignItems: "center",
        justifyContent: "center",
        border: "1px solid #000",
        padding: 0,
    },
    qrText: {
        fontSize: 10,
        margin: 1,
        textAlign: "center",
    },
    // qrMeta: {
    //     width: "10%",
    //     padding: 0,
    //     margin: 0,
    //     transform: "rotate(-180deg)",
    //     color: "#000",
    //     backgroundColor: "yellow",
    //     flexDirection: "row"
    // },
    // qrMetaText: {
    //     width: "100%",
    //     // transform: "rotate(-90deg)",
    //     // transform: "rotate(110deg)",
    //     backgroundColor: "blue",
    //     flexDirection: "row",


    // }
});

// PDF Document Component
const QRCodePDF = ({ qrData }: { qrData: WaterCan[] }) => {
    return (
        <Document>
            {Array.from({ length: Math.ceil(qrData.length / 15) }, (_, pageIndex) => (
                <Page size="A4" style={styles.page} key={pageIndex}>
                    <View style={styles.qrGrid}>
                        {qrData.slice(pageIndex * 15, (pageIndex + 1) * 15).map((data, index) => (
                            <View style={styles.qrContainer} key={index}>
                                <Image src={data.qr_url} style={{ width: "100%", height: "100%" }} />
                                <Text style={styles.qrText}>{data.plant?.name?.substring(0, 2).toUpperCase()}-{data.id}</Text>
                            </View>
                        ))}

                    </View>
                    {/* <View style={styles.qrMeta} >
                        <Text style={styles.qrMetaText} >QR meta data</Text>
                    </View> */}
                </Page>
            ))}
        </Document>
    );
};

// Main PDF Viewer Component
const QRCodePDFViewer = ({ qrData }: { qrData: WaterCan[] }) => {



    return qrData.length > 0 ? (
        <PDFViewer style={{ width: "100%", height: "90vh", borderRadius: 20 }}>
            <QRCodePDF qrData={qrData} />
        </PDFViewer>
    ) : (
        <p>Loading QR Codes...</p>
    );
};

export default QRCodePDFViewer;
