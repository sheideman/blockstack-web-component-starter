import { LitElement } from "lit-element";
import { connect } from "../../state/connect-mixin";

import store from "../../state/index.js";
export class BaseView extends connect(store)(LitElement) {
  static get properties() {
    return {
      userSession: { type: Object },
      organization: { type: Object },
      documents: { type: Array },
      contacts: { type: Array },
      files: { type: Array },
      teams: { type: Array },
      filteredTeams: { type: Array },
      person: { type: Object },
      shareFile: { type: Array },
      singleDoc: { type: Object },
      filteredDocs: { type: Array },
      sharedWith: { type: Array },
      tempDocId: { type: String },
      redirect: { type: Boolean },
      loading: { type: Boolean },
      formLoading: { type: Boolean },
      proLoading: { type: Boolean },
      migrationLength: { type: Number },
      migrationCount: { type: Number },
      migrationComplete: { type: Boolean },
      migrateTitle: { type: String },
      migrateContent: { type: String },
      migrateID: { type: String },
      migrateUpdated: { type: String },
      migrateWords: { type: String },
      currentPage: { type: Number },
      docsPerPage: { type: Number },
      docsSelected: { type: Array },
      activeIndicator: { type: Boolean },
      receiverID: { type: String },
      confirmAdd: { type: Boolean },
      title: { type: String },
      content: { type: Object },
      singleFileContent: { type: String },
      id: { type: String },
      words: { type: String },
      itemUpdated: { type: String },
      index: { type: String },
      singleDocTags: { type: Array },
      tag: { type: String },
      selectedTagId: { type: String },
      deleteState: { type: Boolean },
      sharedCollection: { type: Array },
      sharedWithSingle: { type: Array },
      tagDownload: { type: Boolean },
      selectedDate: { type: String },
      selectedCollab: { type: String },
      selectedTag: { type: String },
      applyFilterNow: { type: Boolean },
      appliedFilter: { type: Boolean },
      tagIndex: { type: String },
      stealthyConnected: { type: Boolean },
      travelstackConnected: { type: Boolean },
      coinsConnected: { type: Boolean },
      docs: { type: Array },
      save: { type: String },
      printPreview: { type: Boolean },
      autoSave: { type: String },
      singlePublic: { type: Object },
      gaiaLink: { type: String },
      hideStealthy: { type: Boolean },
      docFlex: { type: String },
      notificationCount: { type: Number },
      commentId: { type: String },
      deleteIndex: { type: String },
      send: { type: Boolean },
      integrations: { type: Array },
      userRole: { type: String },
      accountSettings: { type: String },
      teamCount: { type: Number },
      documentId: { type: String },
      userToLoadFrom: { type: String },
      idToLoad: { type: String },
      view: { type: Boolean },
      docLoaded: { type: Boolean },
      lastUpdated: { type: String },
      stealthyKey: { type: String },
      blockusignConnected: { type: Boolean },
      blockusignKey: { type: String },
      coinsKey: { type: String },
      kanstackConnected: { type: Boolean },
      kanstackKey: { type: String },
      noteRiotConnected: { type: Boolean },
      noteRiotKey: { type: String },
      mediumConnected: { type: Boolean },
      mediumIntegrationToken: { type: String },
      mediumPost: { type: Object },
      slackConnected: { type: Boolean },
      slackWebhookUrl: { type: String },
      graphitePro: { type: Boolean },
      proOrgInfo: { type: Object },
      newTeammateEmail: { type: String },
      newTeammateName: { type: String },
      newTeammateRole: { type: String },
      ownerBlockstackId: { type: String },
      newTeammateId: { type: String },
      accountDetails: { type: Object },
      ownerName: { type: String },
      ownerEmail: { type: String },
      lastPaymentDate: { type: String },
      inviterKey: { type: String },
      inviteDate: { type: String },
      inviter: { type: String },
      inviteeEmail: { type: String },
      inviteeBlockstackId: { type: String },
      inviteeName: { type: String },
      inviteeRole: { type: String },
      inviteeId: { type: String },
      inviteeKey: { type: String },
      inviterEmail: { type: String },
      inviteAccepted: { type: String },
      inviteDetails: { type: Object },
      teamMateMostRecent: { type: String },
      count: { type: Number },
      audits: { type: Array },
      action: { type: String },
      deleteDoc: { type: Boolean },
      settingsMain: { type: String },
      settingsOnboarding: { type: String },
      teamDocs: { type: Array },
      sharedDocsCount: { type: Number },
      analytics: { type: Array },
      fileCreation: { type: Boolean },
      combined: { type: Array },
      filesPerPage: { type: Number },
      filesSelected: { type: Array },
      file: { type: Object },
      name: { type: String },
      lastModifiedDate: { type: String },
      link: { type: String },
      type: { type: String },
      singleFile: { type: Object },
      singleFileTags: { type: Array },
      uploaded: { type: String },
      typeList: { type: String },
      selectedType: { type: String },
      applyFilter: { type: Boolean },
      filteredFiles: { type: Array },
      currentVaultPage: { type: Number },
      description: { type: String },
      appsUsed: { type: String },
      conversationUser: { type: String },
      img: { type: String },
      page: { type: Number },
      sharedWithMe: { type: Boolean },
      shareFileIndex: { type: Array },
      user: { type: String },
      singleDocIsPublic: { type: Boolean },
      readOnly: { type: Boolean },
      filteredContacts: { type: Array },
      add: { type: Boolean },
      results: { type: Array },
      newContact: { type: String },
      showFirstLink: { type: Boolean },
      types: { type: Array },
      manualResults: { type: Object },
      contactsPerPage: { type: Number },
      contactsSelected: { type: Array },
      rtc: { type: Boolean },
      avatars: { type: Array },
      privateKey: { type: String },
      publicKey: { type: String },
      adminAddress: { type: String },
      adminToken: { type: String },
      tokenRefreshDate: { type: String },
      accountInfo: { type: Object },
      originalConfig: { type: Object },
      invite: { type: Object },
      auditThis: { type: Boolean },
      teamDoc: { type: Boolean },
      isTeamDoc: { type: Boolean },
      webhookUrl: { type: String },
      webhookConnected: { type: Boolean },
      gDocs: { type: Array },
      filteredGDocs: { type: Array },
      token: { type: String },
      compressed: { type: Boolean },
      importAll: { type: Boolean },
      showInstallMessage: { type: Boolean },
      forms: { type: Array },
      filteredForms: { type: Array },
      formsPerPage: { type: Number },
      singleForm: { type: Object },
      formContents: { type: Array },
      qIndex: { type: Number },
      questionTitle: { type: String },
      optionValue: { type: String },
      options: { type: Array },
      required: { type: Boolean },
      deleteLastOption: { type: Boolean },
      publicForm: { type: Object },
      fullFile: { type: String },
      spacing: { type: Number },
      emailOK: { type: Boolean },
      profileEmail: { type: String },
      countFilesDone: { type: Boolean },
      displayMessage: { type: Boolean },
      visible: { type: Boolean },
      newSharedDoc: { type: Boolean },
      markdown: { type: Boolean },
      markdownContent: { type: String },
      wordCount: { type: Number },
      createRTC: { type: Boolean },
      wholeFile: { type: Object },
      collabContent: { type: String },
      readOnlyContent: { type: String },
      fullContent: { type: String },
      versions: { type: Array },
      versionModal: { type: Boolean },
      publicVaultFile: { type: Boolean },
      pubVaultShared: { type: Boolean },
      teamName: { type: String },
      myTimeline: { type: Object },
      timelineTitle: { type: Object },
      timelineEvents: { type: Object },
      timelineTitleMediaUrl: { type: String },
      timelineTitleMediaCaption: { type: String },
      timelineTitleMediaCredit: { type: String },
      timelineTitleTextHeadline: { type: String },
      timelineTitleTextText: { type: String },
      timelineEventMediaUrl: { type: String },
      timelineEventMediaCaption: { type: String },
      timelineEventMediaCredit: { type: String },
      timelineEventStartMonth: { type: String },
      timelineEventStartDay: { type: String },
      timelineEventStartYear: { type: String },
      timelineEventTextHeadline: { type: String },
      timelineEventTextText: { type: String },
      peopleList: { type: Array },
      profileFound: { type: Boolean },
      response: { type: Object },
      reAuth: { type: Boolean },
      provider: { type: String },
      shareModalOpen: { type: Boolean },
      tagModalOpen: { type: Boolean },
      deleteModalOpen: { type: Boolean },
      selectedDoc: { type: Object },
      sharedDocs: { type: Array },
      sharedFiles: { type: Array },
      fileProcessing: { type: Boolean },
      vaultModalOpen: { type: Boolean },
      sharefileModalOpen: { type: Boolean },
      vaultPublicModalOpen: { type: Boolean },
      contactModalOpen: { type: Boolean },
      trialModalOpen: { type: Boolean },
      orgNameModalOpen: { type: Boolean },
      newTeamModalOpen: { type: Boolean },
      newTeamMateModalOpen: { type: Boolean },
      teamListModalOpen: { type: Boolean },
      contact: { type: Object },
      sharedCollectionLoading: { type: Boolean },
      welcome: { type: Boolean },
      newTeamName: { type: String },
      selectedTeam: { type: String },
      settingsNav: { type: String },
      teamKeys: { type: String },
      teamShare: { type: Boolean },
      contactEditing: { type: Boolean },
      newNote: { type: String },
      contactNotes: { type: Array },
      formTitleSaved: { type: Boolean },
      formLinkModalOpen: { type: Boolean },
      formEmbedModalOpen: { type: Boolean },
      teamForms: { type: Array },
      formResponses: { type: Array },
      submitted: { type: Boolean },
      embed: { type: String },
      teamId: { type: String },
      document: { type: Object },
      comments: { type: Array },
      currentColor: { type: Object },
      currentHighlight: { type: Object },
      currentFont: { type: Object },
      currentTextType: { type: Object },
      currentHeading: { type: String },
      currentFontSize: { type: Object },
      boldApplied: { type: Boolean },
      italicsApplied: { type: Boolean },
      underlineApplied: { type: Boolean },
      strikeApplied: { type: Boolean },
      alignment: { type: String },
      nodeType: { type: String },
      marginTop: { type: Number },
      marginBottom: { type: Number },
      marginLeft: { type: Number },
      marginRight: { type: Number },
      orientation: { type: String },
      tableSize: { type: String },
      tableOfContents: { type: Array },
      docOutline: { type: Array },
      pages: { type: Number },
      allComments: { type: Array },
      paragraphs: { type: Number },
      sentences: { type: Number },
      charactersNoSpaces: { type: Number },
      charactersSpaces: { type: Number }
    };
  }
  createRenderRoot() {
    return this;
  }

  dispatch(action ,payload){
    store.dispatch(action ,payload);
  }
  setState(payload) {
  return this.dispatch("setState", payload);
  }
  stateChanged(state) {
    //console.log("state changed in app-root", state);
    this.profile = state.profile;
    this.error = state.error;
    this.offline = state.offline;
    this.drawerOpen = state.drawerOpen;
    this.loading = state.loading;
    this.authenticated = state.authenticated;
    this.userType = state.userType;
    this.fileList = state.fileList;
    this.idToken = state.idToken;
    this.accessToken = state.accessToken;
    this.folders = state.folders;
    this.finishSpeakingDelay = state.finishSpeakingDelay;
    this.finishSpeakingThreshold = state.finishSpeakingThreshold;
    this.userSession = state.userSession;
      this.organization = state.organization;
      this.documents = state.documents;
      this.contacts = state.contacts;
      this.files = state.files;
      this.teams = state.teams;
      this.filteredTeams = state.filteredTeams;
      this.person = state.person;
      this.shareFile = state.shareFile;
      this.singleDoc = state.singleDoc;
      this.filteredDocs = state.filteredDocs;
      this.sharedWith = state.sharedWith;
      this.tempDocId = state.tempDocId;
      this.redirect = state.redirect;
      this.loading = state.loading;
      this.formLoading = state.formLoading;
      this.proLoading = state.proLoading;
      this.migrationLength = state.migrationLength;
      this.migrationCount = state.migrationCount;
      this.migrationComplete = state.migrationComplete;
      this.migrateTitle = state.migrateTitle;
      this.migrateContent = state.migrateContent;
      this.migrateID = state.migrateID;
      this.migrateUpdated = state.migrateUpdated;
      this.migrateWords = state.migrateWords;
      this.currentPage = state.currentPage;
      this.docsPerPage = state.docsPerPage;
      this.docsSelected = state.docsSelected;
      this.activeIndicator = state.activeIndicator;
      this.receiverID = state.receiverID;
      this.confirmAdd = state.confirmAdd;
      this.title = state.title;
      this.content = state.content;
      this.singleFileContent = state.singleFileConten;
      this.Id = state.Id;
      this.words = state.words;
      this.itemUpdated = state.itemUpdated;
      this.index = state.index;
      this.singleDocTags = state.singleDocTags;
      this.tag = state.tag;
      this.selectedTagId = state.selectedTagId;
      this.deleteState = state.deleteState;
      this.sharedCollection = state.sharedCollection;
      this.sharedWithSingle = state.sharedWithSingle;
      this.tagDownload = state.tagDownload;
      this.selectedDate = state.selectedDate;
      this.selectedCollab = state.selectedCollab;
      this.selectedTag = state.selectedTag;
      this.applyFilterNow = state.applyFilterNow;
      this.appliedFilter = state.appliedFilter;
      this.tagIndex = state.tagIndex;
      this.stealthyConnected = state.stealthyConnected;
      this.travelstackConnected = state.travelstackConnected;
      this.coinsConnected = state.coinsConnected;
      this.docs = state.docs;
      this.save = state.save;
      this.printPreview = state.printPreview;
      this.autoSave = state.autoSave;
      this.singlePublic = state.singlePublic;
      this.gaiaLink = state.gaiaLink;
      this.hideStealthy = state.hideStealthy;
      this.docFlex = state.docFlex;
      this.notificationCount = state.notificationCount;
      this.commentId = state.commentId;
      this.deleteIndex = state.deleteIndex;
      this.send = state.send;
      this.integrations = state.integrations;
      this.userRole = state.userRole;
      this.accountSettings = state.accountSettings;
      this.teamCount = state.teamCount;
      this.documentId = state.documentId;
      this.userToLoadFrom = state.userToLoadFrom;
      this.idToLoad = state.idToLoad;
      this.view = state.view;
      this.docLoaded = state.docLoaded;
      this.lastUpdated = state.lastUpdated;
      this.stealthyKey = state.stealthyKey;
      this.blockusignConnected = state.blockusignConnected;
      this.blockusignKey = state.blockusignKey;
      this.coinsKey = state.coinsKey;
      this.kanstackConnected = state.kanstackConnected;
      this.kanstackKey = state.kanstackKey;
      this.noteRiotConnected = state.noteRiotConnected;
      this.noteRiotKey = state.noteRiotKey;
      this.mediumConnected = state.mediumConnected;
      this.mediumIntegrationToken = state.mediumIntegrationToken;
      this.mediumPost = state.mediumPost;
      this.slackConnected = state.slackConnected;
      this.slackWebhookUrl = state.slackWebhookUrl;
      this.pro = state.pro;
      this.proOrgInfo = state.proOrgInfo;
      this.newTeammateEmail = state.newTeammateEmail;
      this.newTeammateName = state.newTeammateName;
      this.newTeammateRole = state.newTeammateRole;
      this.ownerBlockstackId = state.ownerBlockstackId;
      this.newTeammateId = state.newTeammateId;
      this.accountDetails = state.accountDetails;
      this.ownerName = state.ownerName;
      this.ownerEmail = state.ownerEmail;
      this.lastPaymentDate = state.lastPaymentDate;
      this.inviterKey = state.inviterKey;
      this.inviteDate = state.inviteDate;
      this.inviter = state.inviter;
      this.inviteeEmail = state.inviteeEmail;
      this.inviteeBlockstackId = state.inviteeBlockstackId;
      this.inviteeName = state.inviteeName;
      this.inviteeRole = state.inviteeRole;
      this.inviteeId = state.inviteeId;
      this.inviteeKey = state.inviteeKey;
      this.inviterEmail = state.inviterEmail;
      this.inviteAccepted = state.inviteAccepted;
      this.inviteDetails = state.inviteDetails;
      this.teamMateMostRecent = state.teamMateMostRecent;
      this.count = state.count;
      this.audits = state.audits;
      this.action = state.action;
      this.deleteDoc = state.deleteDoc;
      this.settingsMain = state.settingsMain;
      this.settingsOnboarding = state.settingsOnboarding;
      this.teamDocs = state.teamDocs;
      this.sharedDocsCount = state.sharedDocsCount;
      this.analytics = state.analytics;
      this.fileCreation = state.fileCreation;
      this.combined = state.combined;
      this.filesPerPage = state.filesPerPage;
      this.filesSelected = state.filesSelected;
      this.file = state.file;
      this.name = state.name;
      this.lastModifiedDate = state.lastModifiedDate;
      this.link = state.link;
      this.type = state.type;
      this.singleFile = state.singleFile;
      this.singleFileTags = state.singleFileTags;
      this.uploaded = state.uploaded;
      this.typeList = state.typeList;
      this.selectedType = state.selectedType;
      this.applyFilter = state.applyFilter;
      this.filteredFiles = state.filteredFiles;
      this.currentVaultPage = state.currentVaultPage;
      this.description = state.description;
      this.appsUsed = state.appsUsed;
      this.conversationUser = state.conversationUser;
      this.img = state.img;
      this.page = state.page;
      this.sharedWithMe = state.sharedWithMe;
      this.shareFileIndex = state.shareFileIndex;
      this.user = state.user;
      this.singleDocIsPublic = state.singleDocIsPublic;
      this.readOnly = state.readOnly;
      this.filteredContacts = state.filteredContacts;
      this.add = state.add;
      this.results = state.results;
      this.newContact = state.newContact;
      this.showFirstLink = state.showFirstLink;
      this.types = state.types;
      this.manualResults = state.manualResults;
      this.contactsPerPage = state.contactsPerPage;
      this.contactsSelected = state.contactsSelected;
      this.rtc = state.rtc;
      this.avatars = state.avatars;
      this.privateKey = state.privateKey;
      this.publicKey = state.publicKey;
      this.adminAddress = state.adminAddress;
      this.adminToken = state.adminToken;
      this.tokenRefreshDate = state.tokenRefreshDate;
      this.accountInfo = state.accountInfo;
      this.originalConfig = state.originalConfig;
      this.invite = state.invite;
      this.auditThis = state.auditThis;
      this.teamDoc = state.teamDoc;
      this.isTeamDoc = state.isTeamDoc;
      this.webhookUrl = state.webhookUrl;
      this.webhookConnected = state.webhookConnected;
      this.gDocs = state.gDocs;
      this.filteredGDocs = state.filteredGDocs;
      this.token = state.token;
      this.compressed = state.compressed;
      this.importAll = state.importAll;
      this.showInstallMessage = state.showInstallMessage;
      this.forms = state.forms;
      this.filteredForms = state.filteredForms;
      this.formsPerPage = state.formsPerPage;
      this.singleForm = state.singleForm;
      this.formContents = state.formContents;
      this.qIndex = state.qIndex;
      this.questionTitle = state.questionTitle;
      this.optionValue = state.optionValue;
      this.options = state.options;
      this.required = state.required;
      this.deleteLastOption = state.deleteLastOption;
      this.publicForm = state.publicForm;
      this.fullFile = state.fullFile;
      this.spacing = state.spacing;
      this.emailOK = state.emailOK;
      this.profileEmail = state.profileEmail;
      this.countFilesDone = state.countFilesDone;
      this.displayMessage = state.displayMessage;
      this.visible = state.visible;
      this.newSharedDoc = state.newSharedDoc;
      this.markdown = state.markdown;
      this.markdownContent = state.markdownContent;
      this.wordCount = state.wordcount;
      this.createRTC = state.createRTC;
      this.wholeFile = state.wholeFile;
      this.collabContent = state.collabContent;
      this.readOnlyContent = state.readOnlyContent;
      this.fullContent = state.fullContent;
      this.versions = state.versions;
      this.versionModal = state.versionModal;
      this.publicVaultFile = state.publicVaultFile;
      this.pubVaultShared = state.publicVaultShared;
      this.teamName = state.teamName;
      this.myTimeline = state.myTimeline;
      this.timelineTitle = state.timelineTitle;
      this.timelineEvents = state.timelineEvents;
      this.timelineTitleMediaUrl = state.timelineTitleMediaUrl;
      this.timelineTitleMediaCaption = state.timelineTitleMediaCaption;
      this.timelineTitleMediaCredit = state.timelineTitleMediaCredit;
      this.timelineTitleTextHeadline = state.timelineTitleTextHeadline;
      this.timelineTitleTextText = state.timelineTitleTextText;
      this.timelineEventMediaUrl = state.timelineEventMediaUrl;
      this.timelineEventMediaCaption = state.timelineEventMediaCaption;
      this.timelineEventMediaCredit = state.timelineEventMediaCredit;
      this.timelineEventStartMonth = state.timelineEventStartMonth;
      this.timelineEventStartDay = state.timelineEventStartDay;
      this.timelineEventStartYear = state.timelineEventStartYear;
      this.timelineEventTextHeadline = state.timelineEventTextHeadline;
      this.timelineEventTextText = state.timelineEventTextText;
      this.peopleList = state.peopleList;
      this.profileFound = state.profileFound;
      this.response = state.response;
      this.reAuth = state.reAuth;
      this.provider = state.provider;
      this.shareModalOpen = state.shareModalOpen;
      this.tagModalOpen = state.tagModalOpen;
      this.deleteModalOpen = state.deleteModalOpen;
      this.selectedDoc = state.selectedDoc;
      this.sharedDocs = state.sharedDocs;
      this.sharedFiles = state.sharedFiles;
      this.fileProcessing = state.fileProcessing;
      this.vaultModalOpen = state.vaultModalOpen;
      this.sharefileModalOpen = state.sharefileModalOpen;
      this.vaultPublicModalOpen = state.vaultPublicModalOpen;
      this.contactModalOpen = state.contactModalOpen;
      this.trialModalOpen = state.trialModalOpen;
      this.orgNameModalOpen = state.orgNameModalOpen;
      this.newTeamModalOpen = state.newTeamModalOpen;
      this.newTeamMateModalOpen = state.newTeamMateModalOpen;
      this.teamListModalOpen = state.teamListModalOpen;
      this.contact = state.contact;
      this.sharedCollectionLoading = state.sharedCollectionLoading;
      this.welcome = state.welcome;
      this.newTeamName = state.newTeamName;
      this.selectedTeam = state.selectedTeam;
      this.settingsNav = state.settingsNav;
      this.teamKeys = state.teamKeys;
      this.teamShare = state.teamShare;
      this.contactEditing = state.contactEditing;
      this.newNote = state.newNote;
      this.contactNotes = state.contactNotes;
      this.formTitleSaved = state.formTitleSaved;
      this.formLinkModalOpen = state.formLinkModalOpen;
      this.formEmbedModalOpen = state.formEmbedModalOpen;
      this.teamForms = state.teamForms;
      this.formResponses = state.formResponses;
      this.submitted = state.submitted;
      this.embed = state.embed;
      this.teamId = state.teamId;
      this.document = state.document;
      this.comments = state.comments;
      this.currentColor = state.currentColor;
      this.currentHighlight = state.currentHighlight;
      this.currentFont = state.currentFont;
      this.currentTextType = state.currentTextType;
      this.currentHeading = state.currentHeading;
      this.currentFontSize = state.currentFontSize;
      this.boldApplied = state.boldApplied;
      this.italicsApplied = state.italicsApplied;
      this.underlineApplied = state.underlineApplied;
      this.strikeApplied = state.strikeApplied;
      this.alignment = state.alignment;
      this.nodeType = state.nodeType;
      this.marginTop = state.marginTop;
      this.marginBottom = state.marginBottom;
      this.marginLeft = state.marginLeft;
      this.marginRight = state.marginRight;
      this.orientation = state.orientation;
      this.tableSize = state.tableSize;
      this.tableOfContents = state.tableOfContents;
      this.docOutline = state.docOutline;
      this.pages = state.pages;
      this.allComments = state.allComments;
      this.paragraphs = state.paragraphs;
      this.sentences = state.sentences;
      this.charactersNoSpaces = state.charactersNoSpaces;
      this.charactersSpaces = state.charactersSpaces;
  }
};