"use client";

import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Link,
} from "@react-pdf/renderer";
import { formatDate, getDuration } from "@/lib/formatDate";

const styles = StyleSheet.create({
  page: {
    padding: 32,
    fontSize: 10,
    fontFamily: "Helvetica",
  },
  profileHeader: {
    marginBottom: 12,
    paddingBottom: 10,
    borderBottom: "1 solid #ccc",
    alignItems: "center",
  },
  profileName: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 2,
  },
  profileTitle: {
    fontSize: 10,
    color: "#555",
    marginBottom: 8,
  },
  profileContactRow: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  profileContactItem: {
    fontSize: 9,
    color: "#333",
    marginRight: 12,
  },

  email: {
    fontSize: 10,
    fontWeight: "bold",
  },

  profileSummary: {
    fontSize: 10,
    marginTop: 8,
    lineHeight: 1.4,
  },
  title: {
    fontSize: 18,
    marginBottom: 2,
    fontWeight: "bold",
  },
  experienceBlock: {
    marginBottom: 16,
  },
  company: {
    fontSize: 13,
    fontWeight: "bold",
    marginBottom: 2,
  },
  titleLine: {
    fontSize: 11,
    color: "#333",
    marginBottom: 6,
    fontWeight: "bold",
  },
  bullet: {
    marginBottom: 3,
    paddingLeft: 10,
  },
  sectionLabel: {
    marginTop: 6,
    marginBottom: 3,
    fontWeight: "bold",
  },
  techsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 6,
  },
  techTag: {
    fontSize: 9,
    backgroundColor: "#eee",
    borderRadius: 3,
    paddingVertical: 2,
    paddingHorizontal: 6,
    marginRight: 4,
    marginBottom: 4,
  },
});

const ProfileHeader = ({ profileData }) => {
  if (!profileData) return null;
  const links = profileData.links.map((l, key) => {
    return (
      <Link src={l.url} style={styles.profileLink} key={key}>
        <Text>{l.name}</Text>
      </Link>
    );
  });

  return (
    <View style={styles.profileHeader}>
      <Text style={[styles.title, { textAlign: "center" }]}>
        {profileData.name} - {profileData.title}
      </Text>
      {profileData.subTitle && (
        <Text style={[styles.profileTitle, { textAlign: "center" }]}>
          {profileData.subTitle}
        </Text>
      )}

      <View style={[styles.profileContactRow, { justifyContent: "center" }]}>
        <Text style={styles.email}>{profileData.email}</Text>
      </View>
      <View style={[styles.profileContactRow, { justifyContent: "center" }]}>
        <Link src="https://arnaud-ulric.vercel.app/" style={styles.profileLink}>
          <Text>MyWebsite</Text>
        </Link>
      </View>
      <View
        style={[
          styles.profileLinks,
          { flexDirection: "column", justifyContent: "center" },
        ]}
      >
        {links}
      </View>
    </View>
  );
};

export default function ExperiencePDF({ experienceData, profileData }) {
  const sortedExperiences = [...experienceData.experiences].sort(
    (a, b) => new Date(b.startDate) - new Date(a.startDate),
  );

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <ProfileHeader profileData={profileData} />

        {sortedExperiences.map((e, key) => (
          <View style={styles.experienceBlock} key={key} wrap={false}>
            <Text style={styles.company}>{e.company.name}</Text>
            <Text style={styles.titleLine}>
              {e.title} - {formatDate(e.startDate)} / {formatDate(e.endDate)} (
              {getDuration(e.startDate, e.endDate)})
            </Text>

            {e.desc.map((d, i) => (
              <Text style={styles.bullet} key={i}>
                • {d}
              </Text>
            ))}

            {e.achievements.length > 0 && (
              <>
                <Text style={styles.sectionLabel}>Achievements:</Text>
                {e.achievements.map((a, i) => (
                  <Text style={styles.bullet} key={i}>
                    • {a}
                  </Text>
                ))}
              </>
            )}

            <View style={styles.techsRow}>
              {e.techs.map((t, i) => (
                <Text style={styles.techTag} key={i}>
                  {t.name}
                </Text>
              ))}
            </View>
          </View>
        ))}
      </Page>
    </Document>
  );
}
